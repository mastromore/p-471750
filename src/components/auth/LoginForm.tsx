import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";

const loginSchema = z.object({
  employId: z.string().min(1, "Employee ID is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    // Handle login logic here
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[361px] space-y-6"
    >
      <div className="space-y-2">
        <label htmlFor="employId" className="text-base leading-none block">
          Employ Id
        </label>
        <div className="relative">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/f3ab40c303bb4e45be72691b188efe10/bf7b479d271b94b8c4f05cf6cf0317c43052e49f581baa1e0685da4468c58de7?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/f3ab40c303bb4e45be72691b188efe10/bf7b479d271b94b8c4f05cf6cf0317c43052e49f581baa1e0685da4468c58de7?placeholderIfAbsent=true&width=200 200w"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-[33px] h-[33px]"
            alt=""
          />
          <Input
            id="employId"
            type="text"
            className="pl-14"
            {...register("employId")}
            aria-describedby={errors.employId ? "employId-error" : undefined}
          />
        </div>
        {errors.employId && (
          <p id="employId-error" className="text-sm text-red-500">
            {errors.employId.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="text-base leading-none block">
          Password
        </label>
        <div className="relative">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/f3ab40c303bb4e45be72691b188efe10/39683c692003b94a504fbf68533ad426fdbc142d2ceeea3043bb154cf299da66?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/f3ab40c303bb4e45be72691b188efe10/39683c692003b94a504fbf68533ad426fdbc142d2ceeea3043bb154cf299da66?placeholderIfAbsent=true&width=200 200w"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-[33px] h-[33px]"
            alt=""
          />
          <Input
            id="password"
            type="password"
            className="pl-14"
            {...register("password")}
            aria-describedby={errors.password ? "password-error" : undefined}
          />
        </div>
        {errors.password && (
          <p id="password-error" className="text-sm text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white min-h-[51px] w-32 rounded-[20px] text-xl hover:bg-blue-600 transition-colors"
      >
        Log In
      </button>
    </form>
  );
};
