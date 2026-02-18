"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { appointmentFormSchema, type AppointmentFormData } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { PRACTICE_AREAS, TIME_SLOTS } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import { FiCalendar, FiUser, FiMessageSquare, FiCheck, FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  { id: "personal", title: "Personal Info", icon: FiUser },
  { id: "appointment", title: "Schedule", icon: FiCalendar },
  { id: "case", title: "Legalities", icon: FiMessageSquare },
];

export function AppointmentForm() {
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    trigger,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentFormSchema),
  });

  // const selectedDate = watch("preferredDate");

  const nextStep = async () => {
    let fieldsToValidate: (keyof AppointmentFormData)[] = [];
    if (step === 0) fieldsToValidate = ["name", "email", "phone"];
    if (step === 1) fieldsToValidate = ["preferredDate", "preferredTime", "practiceArea"];

    const isValid = await trigger(fieldsToValidate);
    if (isValid) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const onSubmit = async (data: AppointmentFormData) => {
    setIsLoading(true);
    setMessage(null);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setMessage({
        type: "error",
        text: "Appointment key missing. Please contact us directly.",
      });
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
          subject: `New Appointment Request from ${data.name}`,
          from_name: "CNK Law Website",
          ...data,
          preferredDate: formatDate(data.preferredDate),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to book appointment");
      }

      setMessage({
        type: "success",
        text: "Consultation requested! Our senior partner will contact you shortly to confirm.",
      });
      reset();
      setStep(0);
    } catch (error) {
      console.error("Appointment error:", error);
      setMessage({
        type: "error",
        text: "A technical error occurred. Please call our offices directly for immediate assistance.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Stepper */}
      <div className="flex justify-between mb-12 relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />
        {STEPS.map((s, idx) => {
          const Icon = s.icon;
          const isActive = idx === step;
          const isCompleted = idx < step;

          return (
            <div key={s.id} className="relative z-10 flex flex-col items-center gap-3">
              <div
                className={`w-12 h-12 flex items-center justify-center border-2 transition-all duration-500 bg-white ${isActive ? "border-primary text-primary scale-110 shadow-lg" :
                  isCompleted ? "border-secondary bg-secondary text-black" :
                    "border-gray-100 text-gray-300"
                  }`}
              >
                {isCompleted ? <FiCheck size={20} /> : <Icon size={20} />}
              </div>
              <span className={`text-[10px] uppercase font-bold tracking-widest ${isActive ? "text-primary" : "text-gray-400"}`}>
                {s.title}
              </span>
            </div>
          );
        })}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="min-h-[400px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-gray-500">FullName *</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Advocate John Doe"
                    className="rounded-none border-gray-100 focus:border-primary h-12"
                  />
                  {errors.name && <p className="text-[10px] text-red-500 font-bold uppercase">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="counsel@legal.co.ke"
                    className="rounded-none border-gray-100 focus:border-primary h-12"
                  />
                  {errors.email && <p className="text-[10px] text-red-500 font-bold uppercase">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Direct Contact *</Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  placeholder="+254 XXX XXX XXX"
                  className="rounded-none border-gray-100 focus:border-primary h-12"
                />
                {errors.phone && <p className="text-[10px] text-red-500 font-bold uppercase">{errors.phone.message}</p>}
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Preferred Date *</Label>
                  <Controller
                    name="preferredDate"
                    control={control}
                    render={({ field }) => (
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setShowCalendar(!showCalendar)}
                          className="w-full flex items-center justify-between px-4 h-12 border border-gray-100 bg-white hover:border-primary transition-all rounded-none text-sm"
                        >
                          <span className={field.value ? "text-gray-900" : "text-gray-400"}>
                            {field.value ? formatDate(field.value) : "Select date"}
                          </span>
                          <FiCalendar className="text-primary" />
                        </button>
                        {showCalendar && (
                          <div className="absolute top-full left-0 mt-2 z-50 border border-gray-100 p-4 bg-white shadow-2xl">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={(date) => {
                                field.onChange(date);
                                setShowCalendar(false);
                              }}
                              disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                              initialFocus
                            />
                          </div>
                        )}
                      </div>
                    )}
                  />
                  {errors.preferredDate && <p className="text-[10px] text-red-500 font-bold uppercase">{errors.preferredDate.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Preferred Time *</Label>
                  <Controller
                    name="preferredTime"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="rounded-none border-gray-100 h-12">
                          <SelectValue placeholder="Select time session" />
                        </SelectTrigger>
                        <SelectContent className="rounded-none">
                          {TIME_SLOTS.map((time) => (
                            <SelectItem key={time} value={time} className="rounded-none">{time}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.preferredTime && <p className="text-[10px] text-red-500 font-bold uppercase">{errors.preferredTime.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Primary Practice Area *</Label>
                <Controller
                  name="practiceArea"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="rounded-none border-gray-100 h-12">
                        <SelectValue placeholder="Identify legal specialty" />
                      </SelectTrigger>
                      <SelectContent className="rounded-none">
                        {PRACTICE_AREAS.map((area) => (
                          <SelectItem key={area.slug} value={area.slug} className="rounded-none">{area.title}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.practiceArea && <p className="text-[10px] text-red-500 font-bold uppercase">{errors.practiceArea.message}</p>}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <Label htmlFor="caseDescription" className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Strategic Case Brief *</Label>
                <Textarea
                  id="caseDescription"
                  {...register("caseDescription")}
                  placeholder="Outline the nature of your legal inquiry for our senior counsel..."
                  className="rounded-none border-gray-100 focus:border-primary min-h-[180px] italic font-light"
                />
                {errors.caseDescription && <p className="text-[10px] text-red-500 font-bold uppercase">{errors.caseDescription.message}</p>}
              </div>
              <div className="p-4 bg-primary/5 border border-primary/10">
                <p className="text-[10px] text-gray-500 italic leading-relaxed">
                  Confidentiality Notice: Your communication is strictly private and subject to professional attorney-client privilege.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form Controls */}
        <div className="flex gap-4 mt-12">
          {step > 0 && (
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              className="rounded-none border-gray-200 text-gray-500 hover:border-primary hover:text-primary transition-all px-8 h-14 font-bold"
            >
              <FiChevronLeft className="mr-2" /> Previous
            </Button>
          )}

          {step < STEPS.length - 1 ? (
            <Button
              type="button"
              onClick={nextStep}
              className="flex-1 bg-primary text-white rounded-none h-14 font-bold uppercase tracking-widest shadow-xl hover:bg-primary/95 transition-all group"
            >
              Next Milestone <FiChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-secondary text-black rounded-none h-14 font-bold uppercase tracking-widest shadow-xl hover:bg-secondary/90 transition-all"
            >
              {isLoading ? "Transmitting..." : "Initiate Consultation"}
            </Button>
          )}
        </div>

        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-8 p-6 text-center border-l-4 ${message.type === "success"
              ? "bg-green-50 text-green-800 border-green-500"
              : "bg-red-50 text-red-800 border-red-500"
              }`}
          >
            <p className="font-serif italic text-lg">{message.text}</p>
          </motion.div>
        )}
      </form>
    </div>
  );
}
