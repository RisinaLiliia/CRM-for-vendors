
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary-color)',
                secondary: 'var(--secondary-color)',
                accent: 'var(--accent-color)',
                background: 'var(--background-color)',
                'status-active-text': 'var(--status-active-text)',
                'status-active-bg': 'var(--status-active-bg)',
                'status-not-active-text': 'var(--status-not-active-text)',
                'status-not-active-bg': 'var(--status-not-active-bg)',
                'status-pending-text': 'var(--status-pending-text)',
                'status-pending-bg': 'var(--status-pending-bg)',
                'status-suspended-text': 'var(--status-suspended-text)',
                'status-suspended-bg': 'var(--status-suspended-bg)',
            },
            fontFamily: {
                sans: 'var(--font-family)',
                second: 'var(--second-family)',
                third: 'var(--third-family)',
                poppins: 'var(--font3)',
            },
            spacing: {
                '18': '4.5rem',
            },
            borderRadius: {
                '3xl': '1.5rem',
            },
        },
    },
    plugins: [],
}
