module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        jello: 'jello 1s ease-in-out infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        jello: {        
          '0%, 100%': { transform: 'scale3d(1, 1, 1)' },
          '30%': { transform: 'scale3d(1.25, 0.75, 1)' },
          '40%': { transform: 'scale3d(0.75, 1.25, 1)' },
          '50%': { transform: 'scale3d(1.15, 0.85, 1)' },
          '65%': { transform: 'scale3d(0.95, 1.05, 1)' },
          '75%': { transform: 'scale3d(1.05, 0.95, 1)' },
        }
      }
    },
    colors: {
      tc:"#633A1C",
      bg:"#F2F2EC",
      bg2:"rgba(107, 101, 41, 0.1)",
      br:"#28382D",
      rc1:"#F0EEEE",
      rc2:"#2D4133",
      rc3:"#F5E488",
      rut3:"#E9C649",
      rut4:"#77C7B5",
      rut6:"#E4E3D8",
      rut7:"#943B37",
      rut5:"rgba(40, 56, 45, 0.1)",
      rut8:"rgba(126, 63, 21, 0.1)",
      rut9:"rgba(139, 84, 47, 0.56)",
      

    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      heads:['Great Vibes'],
      body:['Antic Didone']
    },
    
  },
  
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
