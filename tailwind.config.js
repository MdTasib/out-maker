module.exports = {
	content: ["./src/**/*.{html,js}"],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#002B5B",
					secondary: "#FFF8F5",
					success: "#e2fcf2",
					accent: "#F0FBFF",
					neutral: "#3d4451",
					"base-100": "#ffffff",
				},
			},
		],
	},
	plugins: [require("daisyui")],
};
