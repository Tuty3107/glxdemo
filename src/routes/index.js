import Home from "~/pages/Home";
import Schedule from "~/pages/Schedule";
import Ticket from "~/pages/Ticket";
import MovieInfo from "~/pages/MovieInfo";
import Blog from "~/pages/Blogs";
import Sale from "~/pages/Sale";
import Notfound from "~/pages/Notfound";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/schedule", component: Schedule },
  { path: "/ticket", component: Ticket },
  { path: "/buyticket/:buyticketId", component: MovieInfo },
  { path: "/blog/:blogId", component: Blog },
  { path: "/sale/:saleId", component: Sale },
  { path: "*", component: Notfound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
