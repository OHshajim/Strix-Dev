import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("About", "routes/about.tsx"),
    route("Services", "routes/services.tsx"),
    route("Work", "routes/work.tsx"),
    route("Contact", "routes/contact.tsx"),
] satisfies RouteConfig;
