

import {neon, neonConfig} from "@neondatabase/serverless";
import {drizzle} from "drizzle-orm/neon-http";
neonConfig.fetchConnectionCache = true;
const sql = neon("postgres://faizakausar.666:l0uHyjcqsBn7@ep-falling-snowflake-199942.us-east-2.aws.neon.tech/neondb");
export const db = drizzle(sql);