CREATE TYPE "public"."types" AS ENUM('credit', 'debit');--> statement-breakpoint
CREATE TABLE "transactions" (
	"id" uuid PRIMARY KEY NOT NULL,
	"description" text NOT NULL,
	"amount" numeric NOT NULL,
	"type" "types" NOT NULL,
	"updated_at" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
