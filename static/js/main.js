"use strict";

// Template Literal (ES6) Polyfill Start
function stripIndent(str) {
  var match = str.match(/^[ \t]*(?=\S)/gm);
  if (!match) return str;

  var indent = Math.min.apply(
    Math,
    match.map(function(x) {
      return x.length;
    })
  );

  var re = new RegExp("^[ \\t]{" + indent.toString() + "}", "gm");
  return indent > 0 ? str.replace(re, "") : str;
}

function literal(fn) {
  var reCommentContents = /\/\*!?(?:@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)[ \t]*\*\//;
  var matchedString = reCommentContents.exec(fn.toString())[1];
  var stringWithEvalResult = matchedString.replace(/\${([^}]*)}/g, function(
    occurency,
    jsExprMatch
  ) {
    return eval(jsExprMatch.trim());
  });

  return stripIndent(stringWithEvalResult).trim();
}
// Template Literal (ES6) Polyfill End

var pageComponents = {
  aboutAuthorComponent: {
    template: literal(function() {
      /*
      <div class="stackedit__html">
        <center>
          <h3>Об авторе</h3>
        </center>
        <p>
          Здравствуйте, я - Вячеслав Беспалов, студент первого курса РГПУ им. А. И. Герцена направления
          <strong>“Информационные системы и технологии”</strong>.
          Это - мой проект по дисциплине
          <strong>“Информационная культура современного человека”</strong>.
        </p>
      </div>
      */
    }),
    name: "AboutAuthor"
  },
  aboutProjectComponent: {
    template: literal(function() {
      /*
      <div class="stackedit__html">
        <center>
          <h3>О проекте</h3>
        </center>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      */
    }),
    name: "AboutProject"
  },
  keyDefsComponent: {
    template: literal(function() {
      /*
      <div class="stackedit__html">
        <center>
          <h3>Ключевые понятия</h3>
        </center>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      */
    }),
    name: "KeyDefs"
  },
  resourcesComponent: {
    template: literal(function() {
      /*
      <div class="stackedit__html">
        <center>
          <h3>Информационные ресурсы</h3>
        </center>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      */
    }),
    name: "Resources"
  },
  multimediaComponent: {
    template: literal(function() {
      /*
      <div class="stackedit__html">
        <center>
          <h3>Мультимедийные материалы</h3>
        </center>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      */
    }),
    name: "Multimedia"
  },
  motivationPresentationComponent: {
    template: literal(function() {
      /*
      <div class="stackedit__html">
        <center>
          <h3>Мотивационная презентация</h3>
        </center>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      */
    }),
    name: "Presentation"
  },
  pollComponent: {
    template: literal(function() {
      /*
      <div class="stackedit__html">
        <center>
          <h3>Сетевой опрос</h3>
        </center>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      */
    }),
    name: "Poll"
  },
  mindmapComponent: {
    template: literal(function() {
      /*
      <div class="stackedit__html">
        <center>
          <h3>Интеллект-карта</h3>
        </center>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      */
    }),
    name: "Mindmap"
  },
  finalPresentationComponent: {
    template: literal(function() {
      /*
      <div class="stackedit__html">
        <center>
          <h3>Итоговая презентация проекта</h3>
        </center>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      */
    }),
    name: "FinalPresentation"
  }
};

var router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "author",
      component: pageComponents.aboutAuthorComponent
    },
    {
      path: "/project",
      name: "project",
      component: pageComponents.aboutProjectComponent
    },
    {
      path: "/keydefs",
      name: "keydefs",
      component: pageComponents.keyDefsComponent
    },
    {
      path: "/resources",
      name: "resources",
      component: pageComponents.resourcesComponent
    },
    {
      path: "/multimedia",
      name: "multimedia",
      component: pageComponents.multimediaComponent
    },
    {
      path: "/motivationPresentation",
      name: "motivationPresentation",
      component: pageComponents.motivationPresentationComponent
    },
    {
      path: "/poll",
      name: "poll",
      component: pageComponents.pollComponent
    },
    {
      path: "/mindmap",
      name: "mindmap",
      component: pageComponents.mindmapComponent
    },
    {
      path: "/finalPresentation",
      name: "finalPresentation",
      component: pageComponents.finalPresentationComponent
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});

var app = new Vue({
  el: "#vue",
  router: router
});
