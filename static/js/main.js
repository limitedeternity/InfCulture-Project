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
          <h3>✨ Об авторе</h3>
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
            <h3>✨ Система вопросов проекта</h3>
        </center>
        <ul>
            <li><strong>Почему риски связаны с публичными компьютерными системами?</strong>
                <ul>
                    <li><em><strong>Можно ли сделать Интернет полностью безопасным?</strong></em>
                        <ul>
                            <li>Какие бывают проблемы безопасности в Интернете?</li>
                            <li>Как разработчик может снизить вероятность появления в его продукте проблем, которые могут поставить пользователя под угрозу?</li>
                            <li>Что может предпринять пользователь, чтобы защититься от кибератак?</li>
                        </ul>
                    </li>
                    <li><em><strong>Возможно ли защитить систему, которая открыта Интернету?</strong></em>
                        <ul>
                            <li>Какие бывают XSS-уязвимости?</li>
                            <li>Как предотвратить SQL-инъекции?</li>
                            <li>Что можно сделать, чтобы снизить эффективность атак методом перебора паролей?</li>
                        </ul>
                    </li>
                    <li><em><strong>Почему важно обновлять ПО на публичных компьютерных системах?</strong></em>
                        <ul>
                            <li>Откуда берутся уязвимости типа RCE?</li>
                            <li>Что из себя представляет эскалация привилегий в контексте операционной системы?</li>
                            <li>Какие бывают уязвимости, связанные с нарушением безопасности доступа к памяти?</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
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
            <h3>✨ Список терминов</h3>
        </center>
        <table>
            <thead>
                <tr>
                    <th>Термин</th>
                    <th>Определение</th>
                    <th>Источник</th>
                    <th>Метод поиска</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Интернет</td>
                    <td>Система компьютерных сетей для хранения и передачи информации</td>
                    <td>Большая российская энциклопедия</td>
                    <td>Книги</td>
                </tr>
                <tr>
                    <td>Межсайтовый скриптинг (XSS)</td>
                    <td>Тип атаки на веб-приложение, заключающийся во внедрении вредоносного кода на страницу, выдаваемую веб-системой</td>
                    <td><a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B6%D1%81%D0%B0%D0%B9%D1%82%D0%BE%D0%B2%D1%8B%D0%B9_%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%B8%D0%BD%D0%B3">Википедия</a></td>
                    <td>Язык поисковых запросов</td>
                </tr>
                <tr>
                    <td>Внедрение SQL-кода</td>
                    <td>Атака, заключающаяся в использовании некорректной обработки веб-системой поступаемых на вход данных с целью внедрения произвольных запросов к базе данных</td>
                    <td>Авторская формулировка</td>
                    <td>Поисковые запросы к синаптической сети головного мозга</td>
                </tr>
                <tr>
                    <td>RCE (<strong>R</strong>emote <strong>C</strong>ode <strong>E</strong>xecution)</td>
                    <td>Уязвимость, при эксплуатации которой происходит удаленное выполнение кода на компьютерной системе</td>
                    <td><a href="https://ru.bmstu.wiki/RCE_(Remote_Code_Execution)">Национальная библиотека им. Н. Э. Баумана</a></td>
                    <td>Электронная библиотека</td>
                </tr>
                <tr>
                    <td>Эскалация привилегий</td>
                    <td>Акт эксплуатации программной ошибки или некорректной конфигурации в операционной системе (или программном обеспечении) для получения наивысшего уровня доступа к ресурсам</td>
                    <td><a href="https://en.wikipedia.org/wiki/Privilege_escalation">Википедия</a></td>
                    <td>Язык поисковых запросов</td>
                </tr>
                <tr>
                    <td>Безопасность доступа к памяти</td>
                    <td>Концепция в разработке программного обеспечения, описывающая методы избегания программных ошибок, ведущих к уязвимостям, связанным с доступом к оперативной памяти</td>
                    <td><a href="https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82%D1%8C_%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%B0_%D0%BA_%D0%BF%D0%B0%D0%BC%D1%8F%D1%82%D0%B8">Википедия</a></td>
                    <td>Язык поисковых запросов</td>
                </tr>
            </tbody>
        </table>
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
            <h3>✨ Информационные ресурсы</h3>
        </center>

        <table>
            <thead>
                <tr>
                    <th>Название, авторство и адрес</th>
                    <th>Аннотация</th>
                    <th>Способ поиска информации</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                  <td><a href="https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project">OWASP Top Ten Project</a></td>
                  <td>Список из десяти уязвиимостей высшей степени критичности, составленный The Open Web Application Security Project</td>
                  <td>Язык поисковых запросов</td>
              </tr>
              <tr>
                  <td><a href="https://safecode.org/wp-content/uploads/2018/03/SAFECode_Fundamental_Practices_for_Secure_Software_Development_March_2018.pdf">Fundamental Practices for Secure Software Development - SAFECode</a></td>
                  <td>Основные способы защиты веб-приложений на стадии их разработки</td>
                  <td>Язык поисковых запросов</td>
              </tr>
              <tr>
                  <td><a href="https://habr.com/ru/company/pentestit/blog/282860/">Защита сайта от хакерских атак — Nemesida WAF</a></td>
                  <td>Статья, описывающая <strong>W</strong>eb <strong>A</strong>pplication <strong>F</strong>irewall, зачем он нужен и как работает</td>
                  <td>Язык поисковых запросов</td>
              </tr>
              <tr>
                  <td><a href="https://rocit.ru/knowledge/internet-banking/50-pravil-internet-bezopasnosti">50 правил безопасности в интернете</a></td>
                  <td>Список рекомендаций, которые помогут “простому смертному” “выжить” в интернете</td>
                  <td>Язык поисковых запросов</td>
              </tr>
              <tr>
                  <td><a href="https://photos.app.goo.gl/g8evib4X4SR1FX7V9">Видео</a></td>
                  <td>Демонстрация выполнения произвольного кода при клонировании вредоносного репозитория с помощью Git</td>
                  <td>Язык поисковых запросов</td>
              </tr>
              <tr>
                  <td><a href="http://heartbleed.com/">Heartbleed Bug</a></td>
                  <td>Классический пример Memory Access Violation. Критическая уязвимость в криптографической библиотеке OpenSSL, позволяющая при помощи сетевых запросов несанкционированно читать память на сервере или на клиенте</td>
                  <td>Язык поисковых запросов</td>
              </tr>
              <tr>
                  <td><a href="https://en.wikipedia.org/wiki/Shellshock_(software_bug)">Shellshock Bug</a></td>
                  <td>Тоже классика, но уже Remote Code Execution. Критическая уязвимость в Bash, который используется в некоторых веб-серверах для выполнения CGI-скриптов, позволяющая при помощи сетевых запросов исполнять произвольные команды на удаленной веб-системе</td>
                  <td>Язык поисковых запросов</td>
              </tr>
              <tr>
                  <td><a href="https://www.youtube.com/watch?v=PWm8bmNnJuc">Видео</a></td>
                  <td>Демонстрация эксплуатации уязвимости Shellshock</td>
                  <td>Язык поисковых запросов</td>
              </tr>
          </tbody>
        </table>
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
          <h3>✨ Мультимедийные материалы</h3>
        </center>
        <ol>
          <li>
            <a href="https://ulearn.me/Course/Hackerdom/Tiemy_kursa_2bc58982-19aa-49ef-bae2-8aaa5d13b967" target="_blank"><strong>Курс "Основы компьютерной безопасности"<strong></a>
          </li>
          <li>
            <a href="https://stepik.org/course/191/" target="_blank"><strong>Курс "Безопасность в Интернете"</strong></a>
          </li>
        </ol>
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
          <h3>✨ Мотивационная презентация</h3>
        </center>
        <div class="canva-embed" data-design-id="DADWn1Wjd4A" data-height-ratio="0.7500" style="padding:75.0000% 5px 5px 5px;background:rgba(0,0,0,0.03);border-radius:8px;"></div>
      </div>
      */
    }),
    name: "Presentation",
    mounted: function() {
      var script = document.createElement("script");
      script.setAttribute("src", "https://sdk.canva.com/v1/embed.js");
      script.setAttribute("async", true);
      document.body.appendChild(script);
    }
  },
  pollComponent: {
    template: literal(function() {
      /*
      <div class="stackedit__html">
        <center>
          <h3>✨ Сетевой опрос</h3>
        </center>
        <div class="centered">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdGm7L1VAvYW4E5SO4jEfZIaNq5Tf21su8amdAORdbUS5TXDg/viewform?embedded=true" width="640" height="397" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
        </div>
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
          <h3>✨ Интеллект-карта</h3>
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
          <h3>✨ Итоговая презентация проекта</h3>
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
