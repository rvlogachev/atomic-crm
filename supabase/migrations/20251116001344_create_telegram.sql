create extension if not exists "pgjwt" with schema "extensions";

create or replace view "public"."init_state" as  SELECT count(sub.id) AS is_initialized
   FROM ( SELECT sales.id
           FROM public.sales
         LIMIT 1) sub;



