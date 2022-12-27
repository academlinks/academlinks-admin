import { FilterT } from "../interface/reducers/usersReducer.types";

export default function generateFilterQuery(params: FilterT) {
  const dbKeys = Object.keys(params).filter(
    (key) => !["sort", "gender"].includes(key)
  );

  //   const shalow = { ...params };
  const result = {};

  //   Object.keys(params).forEach((key) => {
  //     Object.keys(params[key]);
  //   });
  //   console.log(Object.entries(params));
  for (const [key, value] of Object.entries(params)) {
    if (!["sort", "gender"].includes(key) && typeof value === "object") {
        
    }
  }
}
