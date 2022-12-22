import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { productRouter } from "./product";
import { userRouter } from "./user";
import { orderRouter } from "./order";
import { categoryRouter } from "./category";
import { companyRouter } from "./company";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  product: productRouter,
  user: userRouter,
  order: orderRouter,
  category:categoryRouter,
  company: companyRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
