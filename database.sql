
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

 CREATE TABLE "user" (
	"id" serial NOT NULL,
	"user_name" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"admin" BOOLEAN NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "events" (
	"user_id" integer NOT NULL,
	"title" varchar(350) NOT NULL,
	"address" varchar(350) NOT NULL,
	"description" varchar(350) NOT NULL,
	"date" date NOT NULL,
	"image_url" VARCHAR(350) NOT NULL,
	"bandcamp" VARCHAR(255) NOT NULL
) WITH (
  OIDS=FALSE
);




ALTER TABLE "events" ADD CONSTRAINT "events_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");