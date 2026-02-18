"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, type NewsletterFormData } from "@/lib/validations";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewsletterForm() {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsLoading(true);
    setMessage(null);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setMessage({ type: "error", text: "Contact key missing." });
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New Newsletter Subscription",
          from_name: "CNK Law Website",
          ...data,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to subscribe");
      }

      setMessage({ type: "success", text: "Successfully subscribed to newsletter!" });
      reset();
    } catch (error) {
      console.error("Newsletter error:", error);
      setMessage({ type: "error", text: "Failed to subscribe. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isMounted) {
    return (
      <div className="space-y-2">
        <div className="h-10 bg-primary-foreground/10 border border-primary-foreground/20 rounded-none animate-pulse" />
        <div className="h-10 bg-secondary/50 rounded-none animate-pulse" />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2" suppressHydrationWarning>
      <div suppressHydrationWarning>
        <Input
          {...register("email")}
          type="email"
          placeholder="Enter your email"
          className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
          disabled={isLoading}
          suppressHydrationWarning
        />
        {errors.email && (
          <p className="text-xs text-red-300 mt-1">{errors.email.message}</p>
        )}
      </div>
      <Button
        type="submit"
        className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
        disabled={isLoading}
      >
        {isLoading ? "Subscribing..." : "Subscribe"}
      </Button>
      {message && (
        <p
          className={`text-xs mt-2 ${message.type === "success" ? "text-green-300" : "text-red-300"
            }`}
        >
          {message.text}
        </p>
      )}
    </form>
  );
}
