;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-icon07" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M369.804288 882.88768c-5.823488 0-11.676672-1.97632-16.479232-6.02112-10.814464-9.10848-12.19584-25.259008-3.088384-36.072448l271.176704-321.946624-258.6624-309.325824c-9.069568-10.846208-7.629824-26.990592 3.216384-36.061184 10.846208-9.068544 26.990592-7.6288 36.06016 3.217408l272.44544 325.808128c7.970816 9.532416 7.94624 23.410688-0.058368 32.914432l-285.017088 338.378752C384.333824 879.791104 377.09312 882.886656 369.804288 882.88768z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M376.2368 533.0176c-12.4992 12.4992-32.7552 12.4992-45.2544 0l0 0c-12.4992-12.4992-12.4992-32.7552 0-45.2544l316.7808-316.7808c12.4992-12.4992 32.7552-12.4992 45.2544 0l0 0c12.4992 12.4992 12.4992 32.7552 0 45.2544L376.2368 533.0176z"  ></path>' +
    '' +
    '<path d="M693.0176 807.7632c12.4992 12.4992 12.4992 32.7552 0 45.2544l0 0c-12.4992 12.4992-32.7552 12.4992-45.2544 0L330.9824 536.2368c-12.4992-12.4992-12.4992-32.7552 0-45.2544l0 0c12.4992-12.4992 32.7552-12.4992 45.2544 0L693.0176 807.7632z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-radio" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 419.84c51.2 0 92.16 40.96 92.16 92.16S563.2 604.16 512 604.16 419.84 563.2 419.84 512 460.8 419.84 512 419.84z"  ></path>' +
    '' +
    '<path d="M512 802.133333c-160.426667 0-290.133333-129.706667-290.133333-290.133333s129.706667-290.133333 290.133333-290.133333 290.133333 129.706667 290.133333 290.133333S672.426667 802.133333 512 802.133333zM512 256c-141.653333 0-256 114.346667-256 256 0 141.653333 114.346667 256 256 256 141.653333 0 256-114.346667 256-256C768 370.346667 653.653333 256 512 256z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-checkbox" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M398.816 689.297c7.84 7.841 17.717 12.403 27.928 13.686 14.371 1.975 29.464-2.563 40.513-13.612l286.426-286.426c18.747-18.747 18.747-49.14 0.002-67.885-18.749-18.749-49.138-18.744-67.884 0.002L433.073 587.789l-95.129-95.128c-18.747-18.747-49.136-18.752-67.885-0.003-18.745 18.745-18.746 49.137 0.003 67.885L398.816 689.297z"  ></path>' +
    '' +
    '<path d="M896 64 128 64c-35.345 0-64 28.654-64 64l0 768c0 35.345 28.654 64 64 64l768 0c35.345 0 64-28.653 64-64L960 128C960 92.655 931.346 64 896 64zM896 896 128 896 128 128l768 0L896 896z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)