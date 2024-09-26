# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Опис взаємодії компонентів
ToDoContainer

Це головний компонент, який відповідає за зберігання стану завдань та їх пошук.
Компонент ToDoContainer використовує три дочірні компоненти:
TaskSearch для пошуку завдань;
TaskForm для додавання нових завдань;
TaskList для відображення та видалення завдань.
Він керує списком завдань через useState та надає функції для додавання і видалення завдань дочірнім компонентам через пропси.
TaskSearch

Відповідає за фільтрацію завдань за назвою.
Передає значення пошукового запиту до ToDoContainer, який фільтрує завдання відповідно до введеного тексту.
TaskForm

Відповідає за додавання нових завдань до списку.
При сабміті форми викликається функція onAddTask, яка додає нове завдання до стану tasks у ToDoContainer.
TaskList

Відображає список відфільтрованих завдань.
Кожне завдання має кнопку для видалення, яка викликає функцію onDeleteTask з ідентифікатором завдання, що видаляється зі стану tasks у ToDoContainer.
Side Effects
Компонента TaskSearch:

Впливає на компоненту TaskList, оскільки фільтрує список завдань, але при цьому компонента TaskList ніяк не впливає на TaskSearch.
Side effect: зміна в пошуковому полі (searchTitle) призводить до оновлення відображених завдань у TaskList.
Компонента TaskForm:

Впливає на компоненту TaskList, оскільки додавання нових завдань змінює список, який відображає TaskList.
Side effect: додавання нового завдання призводить до автоматичного оновлення відображення завдань.
Компонента TaskList:

Може видаляти завдання зі списку, але цей ефект впливає лише на стан tasks у ToDoContainer, не змінюючи поведінку інших компонентів.
Отже, кожен компонент викликає зміни у стані списку завдань, але тільки TaskSearch та TaskForm мають side effects, що впливають на відображення завдань у TaskList, тоді як зворотного впливу на них немає.