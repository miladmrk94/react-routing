import NotFound from "../Components/NotFound";
import HomePage from "../Components/Page/HomePage";
import AddComment from "./../Components/AddComment";
import ShowComments from "../Components/ShowComments";

const allPages = [
  { path: "/Show/:id", component: ShowComments },
  { path: "/New-Comment", component: AddComment },
  { path: "/", component: HomePage, exact: true },
  { path: "*", component: NotFound },
];

export default allPages;
