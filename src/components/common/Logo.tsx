import React from "react";

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-5xl font-normal leading-[0]">SGCM</h1>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/f3ab40c303bb4e45be72691b188efe10/d104d77ce7f9e4c85d4e6e0b9c4c49f849162ea37d6fe21456875f6fc7abb1ad?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/f3ab40c303bb4e45be72691b188efe10/d104d77ce7f9e4c85d4e6e0b9c4c49f849162ea37d6fe21456875f6fc7abb1ad?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/f3ab40c303bb4e45be72691b188efe10/d104d77ce7f9e4c85d4e6e0b9c4c49f849162ea37d6fe21456875f6fc7abb1ad?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/f3ab40c303bb4e45be72691b188efe10/d104d77ce7f9e4c85d4e6e0b9c4c49f849162ea37d6fe21456875f6fc7abb1ad?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/f3ab40c303bb4e45be72691b188efe10/d104d77ce7f9e4c85d4e6e0b9c4c49f849162ea37d6fe21456875f6fc7abb1ad?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/f3ab40c303bb4e45be72691b188efe10/d104d77ce7f9e4c85d4e6e0b9c4c49f849162ea37d6fe21456875f6fc7abb1ad?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/f3ab40c303bb4e45be72691b188efe10/d104d77ce7f9e4c85d4e6e0b9c4c49f849162ea37d6fe21456875f6fc7abb1ad?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/f3ab40c303bb4e45be72691b188efe10/d104d77ce7f9e4c85d4e6e0b9c4c49f849162ea37d6fe21456875f6fc7abb1ad?placeholderIfAbsent=true"
        className="aspect-[1.28] object-contain w-[292px] max-w-full"
        alt="SGCM Logo"
      />
    </div>
  );
};
