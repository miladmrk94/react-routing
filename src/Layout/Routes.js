import NotFound from "../Components/NotFound";
import HomePage from "../Components/Page/HomePage";
import NewComment from "../Components/Page/NewComment";
import Show from "./../Components/Page/Show";

const allPages = [
  { path: "/Show/:id", component: Show },
  { path: "/New-Comment", component: NewComment },
  { path: "/", component: HomePage, exact: true },
  { path: "*", component: NotFound },
];

export default allPages;
