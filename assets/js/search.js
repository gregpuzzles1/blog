var fuse;
var showButton = document.getElementById("search-button");
var showButtonMobile = document.getElementById("search-button-mobile");
var hideButton = document.getElementById("close-search-button");
var wrapper = document.getElementById("search-wrapper");
var modal = document.getElementById("search-modal");
var input = document.getElementById("search-query");
var output = document.getElementById("search-results");
var first = output ? output.firstChild : null;
var last = output ? output.lastChild : null;
var searchVisible = false;
var indexed = false;
var indexing = false;
var hasResults = false;
var pendingTerm = "";

// Listen for events
showButton ? showButton.addEventListener("click", displaySearch) : null;
showButtonMobile ? showButtonMobile.addEventListener("click", displaySearch) : null;
hideButton ? hideButton.addEventListener("click", hideSearch) : null;
wrapper ? wrapper.addEventListener("click", hideSearch) : null;
modal
  ? modal.addEventListener("click", function (event) {
      event.stopPropagation();
      event.stopImmediatePropagation();
      return false;
    })
  : null;

document.addEventListener("keydown", function (event) {
  // Forward slash to open search wrapper
  if (event.key == "/") {
    var active = document.activeElement;
    var tag = active && active.tagName ? active.tagName : "";
    var isInputField = tag === "INPUT" || tag === "TEXTAREA" || (active && active.isContentEditable);

    if (!searchVisible && !isInputField) {
      event.preventDefault();
      displaySearch();
    }
  }

  // Esc to close search wrapper
  if (event.key == "Escape") {
    hideSearch();
  }

  // Down arrow to move down results list
  if (event.key == "ArrowDown") {
    if (searchVisible && hasResults) {
      event.preventDefault();
      if (document.activeElement == input) {
        first.focus();
      } else if (document.activeElement == last) {
        last.focus();
      } else {
        document.activeElement.parentElement.nextSibling.firstElementChild.focus();
      }
    }
  }

  // Up arrow to move up results list
  if (event.key == "ArrowUp") {
    if (searchVisible && hasResults) {
      event.preventDefault();
      if (document.activeElement == input) {
        input.focus();
      } else if (document.activeElement == first) {
        input.focus();
      } else {
        document.activeElement.parentElement.previousSibling.firstElementChild.focus();
      }
    }
  }

  // Enter to get to results
  if (event.key == "Enter") {
    if (searchVisible && hasResults) {
      event.preventDefault();
      if (document.activeElement == input) {
        first.focus();
      } else {
        document.activeElement.click();
      }
    }
  }
});

// Update search on each keypress
if (input) {
  input.onkeyup = function () {
    executeQuery(this.value);
  };
}

function displaySearch() {
  if (!indexed && !indexing) {
    buildIndex();
  }
  if (!searchVisible && wrapper && input) {
    document.body.style.overflow = "hidden";
    wrapper.style.visibility = "visible";
    input.focus();
    searchVisible = true;
  }
}

function hideSearch() {
  if (searchVisible && wrapper && input && output) {
    document.body.style.overflow = "visible";
    wrapper.style.visibility = "hidden";
    input.value = "";
    output.innerHTML = "";
    document.activeElement.blur();
    searchVisible = false;
    hasResults = false;
  }
}

function fetchJSON(path, onSuccess, onError) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var data = JSON.parse(httpRequest.responseText);
        if (onSuccess) onSuccess(data);
      } else if (onError) {
        onError(httpRequest.status);
      }
    }
  };
  httpRequest.open("GET", path);
  httpRequest.send();
}

function resolveIndexURL() {
  if (!wrapper) {
    return "/index.json";
  }

  var baseURL = wrapper.getAttribute("data-url") || "/";

  try {
    var parsed = new URL(baseURL, window.location.origin);
    var normalizedPath = parsed.pathname.replace(/\/?$/, "/");

    // If configured baseURL points to another domain (common during local dev),
    // keep only the path and use current origin so fetch remains same-origin.
    if (parsed.origin !== window.location.origin) {
      return window.location.origin + normalizedPath + "index.json";
    }

    return parsed.origin + normalizedPath + "index.json";
  } catch (e) {
    return "/index.json";
  }
}

function buildIndex() {
  if (indexed || indexing) {
    return;
  }

  indexing = true;
  var primaryPath = resolveIndexURL();

  fetchJSON(
    primaryPath,
    function (data) {
      var options = {
        shouldSort: true,
        ignoreLocation: true,
        threshold: 0.0,
        includeMatches: true,
        keys: [
          { name: "title", weight: 0.8 },
          { name: "section", weight: 0.2 },
          { name: "summary", weight: 0.6 },
          { name: "content", weight: 0.4 },
        ],
      };

      fuse = new Fuse(data, options);
      indexed = true;
      indexing = false;

      if (pendingTerm) {
        executeQuery(pendingTerm);
      }
    },
    function () {
      // Fallback for path edge-cases.
      fetchJSON(
        "/index.json",
        function (data) {
          var options = {
            shouldSort: true,
            ignoreLocation: true,
            threshold: 0.0,
            includeMatches: true,
            keys: [
              { name: "title", weight: 0.8 },
              { name: "section", weight: 0.2 },
              { name: "summary", weight: 0.6 },
              { name: "content", weight: 0.4 },
            ],
          };

          fuse = new Fuse(data, options);
          indexed = true;
          indexing = false;

          if (pendingTerm) {
            executeQuery(pendingTerm);
          }
        },
        function () {
          indexing = false;
        }
      );
    }
  );
}

function executeQuery(term) {
  if (!output) {
    return;
  }

  pendingTerm = term || "";

  if (!indexed || !fuse) {
    if (!indexing) {
      buildIndex();
    }
    return;
  }

  if (!term || !term.trim()) {
    output.innerHTML = "";
    hasResults = false;
    return;
  }

  var results = fuse.search(term);
  var resultsHTML = "";

  if (results.length > 0) {
    results.forEach(function (value) {
      var html = value.item.summary;
      var div = document.createElement("div");
      div.innerHTML = html;
      value.item.summary = div.textContent || div.innerText || "";
      var title = value.item.externalUrl
        ? value.item.title +
          '<span class="text-xs ml-2 align-center cursor-default text-neutral-400 dark:text-neutral-500">' +
          value.item.externalUrl +
          "</span>"
        : value.item.title;
      var linkconfig = value.item.externalUrl
        ? 'target="_blank" rel="noopener" href="' + value.item.externalUrl + '"'
        : 'href="' + value.item.permalink + '"';
      resultsHTML =
        resultsHTML +
        `<li class="mb-2">
          <a class="flex items-center px-3 py-2 rounded-md appearance-none bg-neutral-100 dark:bg-neutral-700 focus:bg-primary-100 hover:bg-primary-100 dark:hover:bg-primary-900 dark:focus:bg-primary-900 focus:outline-dotted focus:outline-transparent focus:outline-2"
          ${linkconfig} tabindex="0">
            <div class="grow">
              <div class="-mb-1 text-lg font-bold">
                ${title}
              </div>
              <div class="text-sm text-neutral-500 dark:text-neutral-400">${value.item.section}<span class="px-2 text-primary-500">&middot;</span>${value.item.date ? value.item.date : ""}</span></div>
              <div class="text-sm italic">${value.item.summary}</div>
            </div>
            <div class="ml-2 ltr:block rtl:hidden text-neutral-500">&rarr;</div>
            <div class="mr-2 ltr:hidden rtl:block text-neutral-500">&larr;</div>
          </a>
        </li>`;
    });
    hasResults = true;
  } else {
    resultsHTML = "";
    hasResults = false;
  }

  output.innerHTML = resultsHTML;
  if (results.length > 0) {
    first = output.firstChild.firstElementChild;
    last = output.lastChild.firstElementChild;
  }
}