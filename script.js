// Course data and assessments
const data = [
  {
    week: 1,
    title: "Week 1: JavaScript Fundamentals and ES6+",
    overview:
      "Review core JavaScript concepts, ES6+ features, and common coding challenges often asked in front-end interviews.",
    phrases: [
      {
        number: 1,
        en: "Explain the difference between var, let, and const.",
        ar: "اشرح الفرق بين var و let و const.",
        sentence:
          "`var` متغير ذو مجال وظيفة أو مجال عام ويُعاد تعريفه، بينما `let` و `const` لهما مجال كتلة. `let` يمكن إعادة تعيينه ولا يمكن إعادة تعريفه في نفس المجال، أما `const` فلا يمكن إعادة تعيينه أو إعادة تعريفه."
      },
      {
        number: 2,
        en: "What are arrow functions? How do they differ from regular functions?",
        ar: "ما هي الدوال السهمية؟ كيف تختلف عن الدوال العادية؟",
        sentence:
          "الدوال السهمية توفر تركيبًا أقصر للدوال، ولا تملك نطاقها الخاص من `this` أو `arguments`. بدلاً من ذلك، تربط `this` من السياق المحيط، ولا يمكن استخدامها كمنشئ (constructor)."
      },
      {
        number: 3,
        en: "Describe how promises work in JavaScript and how to handle errors.",
        ar: "اشرح كيف تعمل الوعود (Promises) في جافاسكربت وكيفية التعامل مع الأخطاء.",
        sentence:
          "الـ Promise يمثل نتيجة عملية غير متزامنة. لها حالات: `pending` و `fulfilled` و `rejected`. استخدم `.then()` لمعالجة النجاح و`.catch()` لمعالجة الأخطاء، أو استخدم `async/await` مع `try/catch`."
      },
      {
        number: 4,
        en: "What are template literals? Give an example.",
        ar: "ما هي التراكيب النصية (template literals)؟ قدم مثالاً.",
        sentence:
          "التراكيب النصية محاطة بـ backticks (`) وتدعم التعبير باستخدام `${}` وسلاسل متعددة الأسطر. مثال:\n\n```js\nconst name = 'Alice';\nconst greeting = `Hello, ${name}! Today is ${new Date().toLocaleDateString()}.`;\n```"
      }
    ],
    test: [
      {
        question: "What is true about `const` in JavaScript?",
        options: [
          "`const` يسمح لك بإعادة تعيين قيمة المتغير.",
          "`const` مُعرّف ضمن مجال كتلة ولا يمكن إعادة تعيينه أو إعادة تعريفه.",
          "`const` له نفس سلوك `var` من حيث النطاق.",
          "`const` و `let` يتصرفان بشكل متماثل تمامًا."
        ],
        answer:
          "`const` مُعرّف ضمن مجال كتلة ولا يمكن إعادة تعيينه أو إعادة تعريفه."
      },
      {
        question: "What will the following code output?\n\n```js\nconst obj = { a: 1 };\nconst arr = [1, 2, 3];\nconsole.log(`${obj.a + arr[2]}`);\n```",
        options: ["13", "undefined3", "TypeError", "NaN"],
        answer: "13"
      }
    ]
  },
  {
    week: 2,
    title: "Week 2: React Fundamentals",
    overview:
      "Cover React core concepts: components, JSX, props, state, and the component lifecycle. Practice common beginner/intermediate React interview questions.",
    phrases: [
      {
        number: 1,
        en: "What is JSX and why is it used in React?",
        ar: "ما هو JSX ولماذا يُستخدم في React؟",
        sentence:
          "JSX تركيب يسمح بكتابة علامات HTML داخل جافاسكربت بشكل توصيفي. يحول Babel هذا التركيب إلى استدعاءات `React.createElement()`."
      },
      {
        number: 2,
        en: "Explain the difference between functional and class components.",
        ar: "اشرح الفرق بين مكونات الـ Functional ومكونات الـ Class.",
        sentence:
          "مكونات الـ Class ترث من `React.Component` وتملك دوال دورة الحياة، بينما المكونات الوظيفية دوال بسيطة تستخدم Hooks لإدارة الحالة والآثار الجانبية دون حاجة لفئة."
      },
      {
        number: 3,
        en: "How do you pass data from parent to child in React?",
        ar: "كيف تمرر البيانات من مكوّن أب إلى مكوّن ابن في React؟",
        sentence:
          "تُمرر البيانات باستخدام props. على سبيل المثال: `<Child text={message} />`، وفي المكون الابن تستقبل `{ text }` وتستخدمها."
      },
      {
        number: 4,
        en: "What is the purpose of `key` in React lists?",
        ar: "ما هو الغرض من الخاصية `key` في قوائم React؟",
        sentence:
          "`key` هو معرف فريد لكل عنصر في القائمة يساعد React على تتبع العناصر وتحديد أي منها تغيّر أو أُضيف أو حُذف لتحديث الـ DOM بكفاءة."
      }
    ],
    test: [
      {
        question: "Which method updates state in a class component?",
        options: [
          "`this.updateState()`",
          "`this.setState()`",
          "`setState()`",
          "`update()`"
        ],
        answer: "`this.setState()`"
      },
      {
        question: "What happens if you don’t provide a `key` for list items?",
        options: [
          "React سيعرض خطأ ويتوقف عن التنفيذ.",
          "React سيعرض تحذيراً ويستخدم الفهرس كبديل، مما قد يسبب مشاكل في الأداء.",
          "لا شيء؛ المفاتيح اختيارية ولا تؤثر على الأداء.",
          "سيتم تجاهل القائمة ولن تظهر."
        ],
        answer:
          "React سيعرض تحذيراً ويستخدم الفهرس كبديل، مما قد يسبب مشاكل في الأداء."
      }
    ]
  },
  {
    week: 3,
    title: "Week 3: State Management and Hooks",
    overview:
      "Dive into React state management patterns, Hooks (useState, useEffect, useContext), and common pitfalls. Prepare for questions on lifting state, Context API, and custom hooks.",
    phrases: [
      {
        number: 1,
        en: "What is the `useState` Hook and how do you use it?",
        ar: "ما هو Hook `useState` وكيف تستخدمه؟",
        sentence:
          "`useState` Hook يسمح بإضافة حالة للمكونات الوظيفية. يعيد مصفوفة تحتوي على القيمة الحالية ودالة لتحديثها.\n\nمثال:\n```jsx\nconst [count, setCount] = useState(0);\n```"
      },
      {
        number: 2,
        en: "Explain `useEffect` and common use cases.",
        ar: "اشرح Hook `useEffect` وحالات استخدامه الشائعة.",
        sentence:
          "`useEffect` يسمح بتنفيذ آثار جانبية مثل جلب البيانات أو الاشتراكات بعد كل عملية تحديث. يستقبل دالة ومصفوفة تبعيات. يمكن إرجاع دالة تنظيف من داخله لإزالة الاشتراكات."
      },
      {
        number: 3,
        en: "How does the Context API work, and when would you use it?",
        ar: "كيف يعمل Context API ومتى تستخدمه؟",
        sentence:
          "Context API يسمح بتمرير البيانات عميقاً داخل شجرة المكونات دون الحاجة للتمرير عبر props بشكل متكرر. يُستخدم للمواضيع العامة مثل التحقق من المصادقة أو إعدادات الثيم."
      },
      {
        number: 4,
        en: "What are custom Hooks and why create one?",
        ar: "ما هي الـ Custom Hooks ولماذا تنشئ واحدة؟",
        sentence:
          "Custom Hooks هي دوال تبدأ بـ `use` وتعيد منطق حالة يمكن إعادة استخدامه عبر مكونات متعددة، مما يجعل الكود أكثر تنظيماً وقابلية للصيانة."
      }
    ],
    test: [
      {
        question: "What happens if you omit the dependency array in `useEffect`?",
        options: [
          "سيتم تشغيل التأثير مرة واحدة عند التركيب فقط.",
          "سيتم تشغيل التأثير عند كل إعادة عرض (render).",
          "لن يتم تشغيل التأثير أبداً.",
          "React سيعرض خطأ."
        ],
        answer: "سيتم تشغيل التأثير عند كل إعادة عرض (render)."
      },
      {
        question: "Which Hook is used to access context in a functional component?",
        options: ["`useState`", "`useReducer`", "`useContext`", "`useMemo`"],
        answer: "`useContext`"
      }
    ]
  },
  {
    week: 4,
    title: "Week 4: Component Lifecycle, Performance, and Optimization",
    overview:
      "Understand React component lifecycle (for class components) and reconciliation (for functional). Learn techniques to optimize rendering and improve performance.",
    phrases: [
      {
        number: 1,
        en: "List and explain the main lifecycle methods in a React class component.",
        ar: "اذكر واشرح طرق دورة الحياة الرئيسية في مكوّن React من نوع Class.",
        sentence:
          "`constructor(props)`: تهيئة الحالة وربط الدوال.\n`componentDidMount()`: يُستدعى بعد التركيب، جيد لجلب البيانات.\n`shouldComponentUpdate()`: للتحكم بإعادة العرض عن طريق إرجاع true/false.\n`componentDidUpdate()`: يُستدعى بعد التحديث، مفيد للمقارنة مع الحالة السابقة.\n`componentWillUnmount()`: تنظيف قبل إلغاء التركيب (إلغاء الاشتراكات، مسح المؤقتات)."
      },
      {
        number: 2,
        en: "What is React reconciliation and how does the virtual DOM work?",
        ar: "ما هو مفهوم الـ reconciliation في React وكيف يعمل الـ virtual DOM؟",
        sentence:
          "Reconciliation هي العملية التي يقارن فيها React بين شجرة الـ virtual DOM القديمة والجديدة (diffing)، ثم يحدث فقط التغييرات اللازمة في الـ DOM الحقيقي لتحسين الأداء."
      },
      {
        number: 3,
        en: "How do you prevent unnecessary re-renders in React?",
        ar: "كيف تمنع عمليات إعادة العرض غير الضرورية في React؟",
        sentence:
          "في المكونات الكلاس استخدم `shouldComponentUpdate` أو ورث من `PureComponent`. في المكونات الوظيفية استخدم `React.memo` و`useCallback` و`useMemo` لحفظ القيم والدوال وعدم إعادة إنشائها إذا لم تتغير التبعيات."
      },
      {
        number: 4,
        en: "What is code-splitting and how do you implement it in React?",
        ar: "ما هو تقسيم الكود (code-splitting) وكيف تنفذه في React؟",
        sentence:
          "Code-splitting هو تقسيم التطبيق إلى حزم أصغر تُحمّل عند الطلب لتحسين زمن التحميل الأولي. في React، استخدم `React.lazy()` مع `<Suspense>`:\n\n```jsx\nconst LazyComponent = React.lazy(() => import('./LazyComponent'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<div>Loading...</div>}>\n      <LazyComponent />\n    </Suspense>\n  );\n}\n```"
      }
    ],
    test: [
      {
        question: "Which Hook memoizes a value between renders?",
        options: ["`useState`", "`useEffect`", "`useCallback`", "`useMemo`"],
        answer: "`useMemo`"
      },
      {
        question: "What is the primary purpose of `React.memo`?",
        options: [
          "للحصول على بيانات من API.",
          "لمنع إعادة العرض لمكون وظيفي إذا لم تتغير props.",
          "لتحويل مكوّن من Class إلى Functional.",
          "لإدارة الحالة العامة للتطبيق."
        ],
        answer:
          "لمنع إعادة العرض لمكون وظيفي إذا لم تتغير props."
      }
    ]
  },
  {
    week: 5,
    title: "Week 5: Testing, Debugging, and Tooling",
    overview:
      "Learn common testing frameworks (Jest, React Testing Library), debugging techniques, and essential tooling (Webpack, Babel, ESLint, Prettier) used in React projects.",
    phrases: [
      {
        number: 1,
        en: "What is the difference between unit testing and integration testing?",
        ar: "ما الفرق بين الاختبار الوحدوي (unit testing) والاختبار التكاملية (integration testing)؟",
        sentence:
          "الـ unit testing يختبر وظائف أو مكونات فردية في عزلة، بينما الـ integration testing يتحقق من عمل عدة مكونات أو وحدات معاً والتفاعل بينها."
      },
      {
        number: 2,
        en: "How do you write a basic Jest test for a React component?",
        ar: "كيف تكتب اختبار Jest أساسي لمكوّن React؟",
        sentence:
          "مثال:\n\n```jsx\n// Button.jsx\nexport default function Button({ onClick, label }) {\n  return <button onClick={onClick}>{label}</button>;\n}\n\n// Button.test.jsx\nimport { render, fireEvent } from '@testing-library/react';\nimport Button from './Button';\n\ntest('calls onClick when clicked', () => {\n  const handleClick = jest.fn();\n  const { getByText } = render(<Button onClick={handleClick} label=\"Click Me\" />);\n  fireEvent.click(getByText('Click Me'));\n  expect(handleClick).toHaveBeenCalledTimes(1);\n});\n```"
      },
      {
        number: 3,
        en: "What tools do you use for linting and formatting code in a React project?",
        ar: "ما الأدوات التي تستخدمها لفحص وتنسيق الكود في مشروع React؟",
        sentence:
          "ESLint للكشف عن أخطاء الكود وفرض قواعد الأسلوب، وPrettier لتنسيق الكود بشكل موحد. تُدمجان عبر إعداد ملفات `.eslintrc` و`.prettierrc`."
      },
      {
        number: 4,
        en: "How do you debug a React application effectively?",
        ar: "كيف تقوم بتصحيح أخطاء تطبيق React بشكل فعّال؟",
        sentence:
          "استخدم DevTools في المتصفح لفحص الـ DOM والاطلاع على الـ console، ودعمة React DevTools لفحص props وstate وHooks، ويمكن استخدام `debugger;` في الكود أو متصفح VS Code."
      }
    ],
    test: [
      {
        question: "Which command runs Jest tests in watch mode by default (using Create React App)?",
        options: ["`npm test`", "`npm run lint`", "`npm run test:watch`", "`jest --watchAll`"],
        answer: "`npm test`"
      },
      {
        question: "What does ESLint primarily do?",
        options: [
          "يقوم بتنسيق الكود.",
          "يثبت حزم npm.",
          "يحلل الكود لاكتشاف الأخطاء ويفرض قواعد الأسلوب.",
          "ينشئ ملفات HTML ثابتة."
        ],
        answer:
          "يحلل الكود لاكتشاف الأخطاء ويفرض قواعد الأسلوب."
      }
    ]
  },
  {
    week: 6,
    title: "Week 6: Advanced React Topics and Ecosystem",
    overview:
      "Explore advanced topics: React Router, Redux or MobX for state management, server-side rendering (Next.js), GraphQL, and connecting React to REST APIs. Prepare for architectural and scenario-based questions.",
    phrases: [
      {
        number: 1,
        en: "What is React Router and how do you implement client-side routing?",
        ar: "ما هو React Router وكيف تنفّذ التوجيه من جانب العميل؟",
        sentence:
          "React Router مكتبة لإدارة التنقل في تطبيقات React أحادية الصفحة. تستخدم مكونات مثل `<BrowserRouter>`, `<Route>`, و `<Link>` لربط المسارات بالمكونات."
      },
      {
        number: 2,
        en: "Compare Redux with the Context API. When would you choose one over the other?",
        ar: "قارن بين Redux و Context API. متى تختار واحد منهما على الآخر؟",
        sentence:
          "Redux حاوية حالة مركزية مناسبة للتطبيقات الكبيرة ذات منطق معقد، بينما Context API مدمج في React لتمرير البيانات دون prop drilling في التطبيقات الصغيرة أو المتوسطة."
      },
      {
        number: 3,
        en: "What is server-side rendering (SSR) and how does Next.js help with it?",
        ar: "ما هو العرض من جانب الخادم (SSR) وكيف يساعد Next.js في ذلك؟",
        sentence:
          "SSR يعني إنشاء مكونات React على الخادم وإرسال HTML النهائي إلى العميل لتحسين SEO وأداء التحميل الأولي. Next.js يوفر دعمًا مدمجًا لـ SSR و SSG عبر دوال مثل `getServerSideProps` و `getStaticProps`."
      },
      {
        number: 4,
        en: "How do you integrate a REST API or GraphQL endpoint in a React app?",
        ar: "كيف تدمج واجهة REST API أو نقطة نهاية GraphQL في تطبيق React؟",
        sentence:
          "لـ REST استخدم `fetch` أو Axios داخل `useEffect` لجلب البيانات وتخزينها في الحالة. لـ GraphQL استخدم عميل مثل Apollo Client مع Hook `useQuery` لطلب البيانات ومعالجتها."
      }
    ],
    test: [
      {
        question: "Which hook from Apollo Client is used to fetch GraphQL data?",
        options: ["`useFetch`", "`useQuery`", "`useGraphQL`", "`useApollo`"],
        answer: "`useQuery`"
      },
      {
        question: "In Redux, which function is used to create the store?",
        options: ["`createStore()`", "`configureStore()`", "`makeStore()`", "`initStore()`"],
        answer: "`createStore()`"
      }
    ]
  }
];

const fullTestData = {
  title: "Full Front-End React Interview Test",
  overview:
    "A comprehensive test covering JavaScript fundamentals, React core concepts, state management, performance optimization, testing, and advanced React topics.",
  test: [
    {
      question: "Which of the following statements about React Hooks is TRUE?",
      options: [
        "`useState` can only be used inside class components.",
        "`useEffect` runs after every render by default unless dependencies are provided.",
        "`useCallback` creates a new function on every render even if dependencies don’t change.",
        "`useContext` replaces the need for both `useState` and `useEffect`."
      ],
      answer:
        "`useEffect` runs after every render by default unless dependencies are provided."
    },
    {
      question:
        "Why is it important to supply a unique `key` prop when rendering lists in React?",
      options: [
        "To improve styling consistency across list items.",
        "To help React identify which items have changed, been added, or removed for efficient updates.",
        "To enable server-side rendering automatically.",
        "To allow event handlers to work on list items."
      ],
      answer:
        "To help React identify which items have changed, been added, or removed for efficient updates."
    },
    {
      question:
        "Which testing library is recommended for testing React components by simulating user interactions?",
      options: ["Enzyme", "Mocha", "React Testing Library", "Chai"],
      answer: "React Testing Library"
    },
    {
      question:
        "What is the main advantage of using `React.lazy()` and `<Suspense>`?",
      options: [
        "They automatically test components in isolation.",
        "They allow code-splitting and lazy-loading of components to improve performance.",
        "They force all components to be server-side rendered.",
        "They replace Redux for global state management."
      ],
      answer:
        "They allow code-splitting and lazy-loading of components to improve performance."
    }
  ]
};


// المتغيرات العامة
const weekListEl = document.getElementById("week-list");
const testListEl = document.getElementById("test-list");
const weekTitleEl = document.getElementById("week-title");
const weekOverviewEl = document.getElementById("week-overview");
const lessonCardsEl = document.getElementById("lesson-cards");
const weekTestEl = document.getElementById("week-test");
const weekTestContentEl = document.getElementById("week-test-content");
const fullTestEl = document.getElementById("full-test");
const fullTestContentEl = document.getElementById("full-test-content");
const backToLessonsBtn = document.getElementById("back-to-lessons");
const backToWeekTestsBtn = document.getElementById("back-to-week-tests");
const checkWeekTestBtn = document.getElementById("check-week-test");
const checkFullTestBtn = document.getElementById("check-full-test");

let currentWeek = null;
let currentPhraseIndex = 0; // Track the current phrase index

// Create overlay for sidebar
const overlay = document.createElement('div');
overlay.className = 'sidebar-overlay';
document.body.appendChild(overlay);

// Create navigation buttons
const navigationDiv = document.createElement('div');
navigationDiv.className = 'navigation-buttons';
navigationDiv.innerHTML = `
  <button id="prev-phrase" disabled>Back</button>
  <span id="phrase-counter"></span>
  <button id="next-phrase">Next</button>
`;
lessonCardsEl.appendChild(navigationDiv);

const prevPhraseBtn = document.getElementById('prev-phrase');
const nextPhraseBtn = document.getElementById('next-phrase');
const phraseCounter = document.getElementById('phrase-counter');

// Sidebar toggle functionality
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

function toggleSidebar() {
  sidebarToggle.classList.toggle('active');
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
}

sidebarToggle.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

// Close sidebar when clicking anywhere in the sidebar (on mobile)
document.querySelector('.sidebar').addEventListener('click', (event) => {
  if (window.innerWidth <= 768) {
    // Check if the clicked element is a button or inside a list item
    if (event.target.tagName === 'BUTTON' || event.target.closest('li')) {
      toggleSidebar();
    }
  }
});

// إنشاء قائمة الأسابيع في الشريط الجانبي
function populateWeekList() {
  data.forEach((week) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = `Week ${week.week}`;
    btn.classList.add("week-btn");
    btn.dataset.week = week.week;
    btn.addEventListener("click", () => {
      loadWeek(week.week);
    });
    li.appendChild(btn);
    weekListEl.appendChild(li);
  });
}

// تحميل بيانات الأسبوع المختار (الدروس)
function loadWeek(weekNumber) {
  currentWeek = data.find((w) => w.week === weekNumber);
  currentPhraseIndex = 0; // Reset phrase index when loading new week

  // إظهار الدروس وإخفاء الاختبارات
  lessonCardsEl.style.display = "flex";
  weekTestEl.classList.add("hidden");
  fullTestEl.classList.add("hidden");

  // تحديث عنوان ونظرة عامة
  weekTitleEl.textContent = currentWeek.title;
  weekOverviewEl.textContent = currentWeek.overview;

  // تفريغ الدروس القديمة
  lessonCardsEl.innerHTML = "";

  // Add navigation buttons back after clearing
  lessonCardsEl.appendChild(navigationDiv);

  // عرض بطاقات الفليب لكل عبارة
  currentWeek.phrases.forEach((phrase) => {
    const card = document.createElement("div");
    card.className = "card";    // Format code blocks in the sentence
    const formattedSentence = phrase.sentence.replace(/```([^`]+)```/g, 
      (match, code) => `<pre><code>${code}</code></pre>`
    );

    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <div class="phrase-number">${phrase.number}</div>
          <div class="phrase-text">${phrase.en}</div>
          <div class="phrase-translation">${phrase.ar}</div>
        </div>
        <div class="card-back">
          <div>${formattedSentence}</div>
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

    lessonCardsEl.appendChild(card);
  });

  // Show only the first phrase and update navigation
  updatePhraseDisplay();

  // تحديث أزرار الأسبوع في الشريط الجانبي
  updateActiveWeek(weekNumber);
}

// تمييز الأسبوع والاختبار النشط
function updateActiveWeek(weekNumber, isTest = false) {
  // Reset all active states
  document.querySelectorAll(".week-btn, .test-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  if (isTest) {
    // If it's a test, activate the corresponding test button
    const testBtn = document.querySelector(`.test-btn[data-test="${weekNumber}"]`);
    if (testBtn) testBtn.classList.add("active");
  } else if (weekNumber) {
    // If it's a week, activate the corresponding week button
    const weekBtn = document.querySelector(`.week-btn[data-week="${weekNumber}"]`);
    if (weekBtn) weekBtn.classList.add("active");
  }
}

// تحميل اختبار الأسبوع
function loadWeekTest(weekNumber) {
  currentWeek = data.find((w) => w.week === weekNumber);
  if (!currentWeek) return;

  lessonCardsEl.style.display = "none";
  weekTestEl.classList.remove("hidden");
  fullTestEl.classList.add("hidden");

  // تحديث عنوان ونظرة عامة (اختياري)
  weekTitleEl.textContent = currentWeek.title + " - Test";
  weekOverviewEl.textContent = "Answer the following questions.";
  
  // Update active state for the test button
  updateActiveWeek(weekNumber, true);

  // تفريغ الاختبار القديم
  weekTestContentEl.innerHTML = "";

  currentWeek.test.forEach((q, idx) => {
    const div = document.createElement("div");
    div.className = "test-question";
    div.innerHTML = `<strong>Q${idx + 1}:</strong> ${q.question}<br>`;
    q.options.forEach((opt) => {
      const label = document.createElement("label");
      label.className = "test-answer";
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `q${idx}`;
      radio.value = opt;
      label.appendChild(radio);
      label.append(` ${opt}`);
      div.appendChild(label);
    });
    weekTestContentEl.appendChild(div);
  });
}

// تحميل الاختبار الشامل لجميع الأسابيع
function loadFullTest() {
  lessonCardsEl.style.display = "none";
  weekTestEl.classList.add("hidden");
  fullTestEl.classList.remove("hidden");

  weekTitleEl.textContent = fullTestData.title;
  weekOverviewEl.textContent = fullTestData.overview;

  // Update active state for the full test button
  updateActiveWeek('all', true);

  fullTestContentEl.innerHTML = "";

  fullTestData.test.forEach((q, idx) => {
    const div = document.createElement("div");
    div.className = "test-question";
    div.innerHTML = `<strong>Q${idx + 1}:</strong> ${q.question}`;
    
    const optionsContainer = document.createElement("div");
    optionsContainer.className = "test-options";
    
    q.options.forEach((opt) => {
      const label = document.createElement("label");
      label.className = "test-answer";
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `fullq${idx}`;
      radio.value = opt;
      label.appendChild(radio);
      label.append(` ${opt}`);
      optionsContainer.appendChild(label);
    });
    
    div.appendChild(optionsContainer);
    fullTestContentEl.appendChild(div);
  });
}

// أزرار العودة من الاختبارات إلى الدروس
backToLessonsBtn.addEventListener("click", () => {
  if (currentWeek) loadWeek(currentWeek.week);
});

backToWeekTestsBtn.addEventListener("click", () => {
  fullTestEl.classList.add("hidden");
  lessonCardsEl.style.display = "flex";
  weekTestEl.classList.add("hidden");
  weekTitleEl.textContent = "Select a Week";
  weekOverviewEl.textContent = "";
  // Clear all active states
  updateActiveWeek(null);
});

// إضافة زر اختبار لكل أسبوع أسفل قائمة الأسابيع
function addWeekTestsToSidebar() {
  // Add event listener for the Full Test button
  const fullTestBtn = document.querySelector('[data-test="all"]');
  fullTestBtn.addEventListener("click", () => {
    loadFullTest();
  });

  data.forEach((week) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = `Test Week ${week.week}`;
    btn.classList.add("test-btn");
    btn.dataset.test = week.week;    btn.addEventListener("click", () => {
      loadWeekTest(week.week);
      updateActiveWeek(week.week, true);
    });
    li.appendChild(btn);
    testListEl.appendChild(li);
  });
}

// بدء التطبيق
function init() {
  populateWeekList();
  addWeekTestsToSidebar();
  weekTitleEl.textContent = "Select a Week";
  weekOverviewEl.textContent = "";
}

// دالة للتحقق من اختبار معين (تأخذ الأسئلة والـ container)
function checkTestAnswers(questions, container) {
  let correctCount = 0;

  questions.forEach((q, idx) => {
    // تحديد اسم الحقل
    const name =
      container === weekTestContentEl ? `q${idx}` : `fullq${idx + 1}`;

    // الحصول على الاختيار المختار
    const selected = container.querySelector(`input[name="${name}"]:checked`);

    // إزالة تلوين سابق
    const labels = container.querySelectorAll(`input[name="${name}"]`);
    labels.forEach((input) => {
      if (input.parentElement.classList.contains("correct"))
        input.parentElement.classList.remove("correct");
      if (input.parentElement.classList.contains("wrong"))
        input.parentElement.classList.remove("wrong");
    });

    if (selected) {
      if (selected.value === q.answer) {
        correctCount++;
        selected.parentElement.classList.add("correct");
      } else {
        selected.parentElement.classList.add("wrong");
        // تمييز الإجابة الصحيحة أيضاً
        const correctInput = container.querySelector(
          `input[name="${name}"][value="${q.answer}"]`
        );
        if (correctInput) correctInput.parentElement.classList.add("correct");
      }
    } else {
      // لم يتم اختيار إجابة
      // يمكن تلوين السؤال كاملاً بالخطأ أو تركه
    }
  });
}

// أحداث أزرار التحقق
checkWeekTestBtn.addEventListener("click", () => {
  if (!currentWeek || !currentWeek.test) return;
  checkTestAnswers(currentWeek.test, weekTestContentEl);
});

checkFullTestBtn.addEventListener("click", () => {
  // جمع كل أسئلة جميع الأسابيع في مصفوفة واحدة
  let allQuestions = [];
  data.forEach((week) => {
    allQuestions = allQuestions.concat(week.test);
  });
  checkTestAnswers(allQuestions, fullTestContentEl);
});

// Navigation buttons functionality
nextPhraseBtn.addEventListener('click', () => {
  if (currentPhraseIndex < currentWeek.phrases.length - 1) {
    currentPhraseIndex++;
    updatePhraseDisplay();
  }
});

prevPhraseBtn.addEventListener('click', () => {
  if (currentPhraseIndex > 0) {
    currentPhraseIndex--;
    updatePhraseDisplay();
  }
});

function updatePhraseDisplay() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.display = (index === currentPhraseIndex) ? 'block' : 'none';
  });
  phraseCounter.textContent = `${currentPhraseIndex + 1} / ${currentWeek.phrases.length}`;

  // Enable or disable navigation buttons
  prevPhraseBtn.disabled = (currentPhraseIndex === 0);
  nextPhraseBtn.disabled = (currentPhraseIndex === currentWeek.phrases.length - 1);
}

// Initialize the first week on load
window.addEventListener('load', () => {
  if (data.length > 0) {
    loadWeek(data[0].week);
  }
});

init();
