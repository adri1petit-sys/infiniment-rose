"use client";

import { motion } from "framer-motion";

type Props = {
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function RegisterButton({
  children = "Je m'inscris",
  size = "lg",
  className = "",
}: Props) {
  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const handleClick = () => {
    // À brancher sur HelloAsso après partenariat Ligue 37.
    // En attendant, petit placeholder pédagogique.
    alert(
      "Les inscriptions HelloAsso seront branchées dès le partenariat signé avec la Ligue contre le Cancer 37. Stay tuned.",
    );
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`
        inline-flex items-center justify-center gap-2 rounded-full
        bg-rose text-white font-semibold
        shadow-[0_4px_20px_rgba(230,0,126,0.35)]
        hover:bg-rose-dark hover:shadow-[0_8px_30px_rgba(230,0,126,0.5)]
        transition-all duration-200
        animate-pulse-glow
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
      <span aria-hidden>→</span>
    </motion.button>
  );
}
