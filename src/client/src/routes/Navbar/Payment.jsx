import React from "react";
import axios from "axios";

class Payment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	razorPay = async() => {
	const { history, match } = this.props;
	const url = "http://4be0e3fbd5d4.ngrok.io" + match.url
		try {
			let order_res = await axios.post(url,{
			"amount": 490 * 100,
			"currency": "INR",
			"receipt": "1#Saikiran#" + Date.now(),
			"payment_capture":"1",
		})
		console.log(order_res)
		var options = {
			"key": "rzp_test_atM2YwdkGw4EC6", // Enter the Key ID generated from the Dashboard
			"amount": 490 * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
			"currency": "INR",
			"name": "Saikiran",
			"description": "Booking.com",
			"image": "https://cdn.worldvectorlogo.com/logos/bookingcom-1.svg",
			"order_id": order_res['data']['id'], //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
			"prefill": {
				"name": "Saikiran",
				"email": "sai@mail.com",
				"contact": "9366535775"
			},
			"notes": {
				"address": "Razorpay Corporate Office"
			},
			"theme": {
				"color": "#003072"
			},
			handler: async (response) => {
				let final_res = await axios.post(url+"/getValidation", {
					...response,
				})
				console.log(response)
				if(final_res['data']['status'] === 'Success'){
					console.log(final_res['data']['status'], final_res['data']['message'])
					alert(final_res['data']['message'])
					const redirect_url = "/stays/property/"+match.params.prop_id+"/success"
					history.push(redirect_url)
				}
				else{
					alert(final_res['data']['message'])
				}
			},
		};
		const rzp_trial = window.Razorpay(options);
		rzp_trial.open();
		} catch (error) {
			console.log(error)
		}
	}
	

	render() {
		return (
			<span>
				<button type="submit" className="btn mr-3" style={{backgroundColor:"#0071c2",color:"white"}} onClick={this.razorPay}>Pay</button>
			</span>
		);
	}
}

export default Payment





















// razorPay = async (details) => {
// 	const { history } = this.props;

// 	try {
// 		let order_res = await axios.post(
// 			"http://127.0.0.1:5000/stays/property/1/payment",
// 			{
// 				amount: Number(details["price"]) * 100,
// 				currency: "INR",
// 				receipt: details["id"] + "#" + details["name"] + "#" + Date.now(),
// 				payment_capture: "1",
// 				// amount: 500 * 100,
// 				// currency: "INR",
// 				// receipt: "1#Sai#" + Date.now(),
// 				// payment_capture: "1",
// 			}
// 		);

// 		var options = {
// 			key: "rzp_test_atM2YwdkGw4EC6", // Enter the Key ID generated from the Dashboard
// 			amount: Number(details["price"]) * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
// 			// amount: 500 * 100,
// 			currency: "INR",
// 			name: "Sai",
// 			description: "Test Transaction",
// 			image:
// 				"https://cdn.worldvectorlogo.com/logos/bookingcom-1.svg",
// 			order_id: "id1", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
// 			prefill: {
// 				name: "Username",
// 				email: "User email-address",
// 				contact: "9999999999",
// 			},
// 			notes: {
// 				address: "Razorpay Corporate Office",
// 			},
// 			theme: {
// 				color: "#F37254",
// 			},
// 			handler: async (response) => {
// 				console.log(response);
// 				let final_res = await axios.post(
// 					"http://127.0.0.1:5000/stays/property/1/validation",
// 					{
// 						...response,
// 					}
// 				);
// 				if (final_res["data"]["status"] == "success") {
// 					alert(final_res["data"]["message"]);
// 					history.push("/");
// 				} else {
// 					alert(final_res["data"]["message"]);
// 				}
// 			},
// 		};
// 		const rzp_trial = window.Razorpay(options);
// 		rzp_trial.open();
// 	} catch (error) {
// 		console.log(error);
// 	}
// };
