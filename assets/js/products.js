const app = new Vue({
	el: '#neatproducts',
	data(){
		return{
				phone_no:null,
				neatluxproducts:null,
				loading:true,
				orderStatus:null,
				nstatus:null,
				imageURL:'https://neatlux.co.tz/server/api/product/img/'
		}
	},
	mounted(){
			axios
				.get('https://neatlux.co.tz/server/api/products')
				.then((response) =>{
					this.neatluxproducts = response.data.products
					console.log('am called');
				})
				.catch(function(error){
					console.log('am called-------');
					console.log(error);
				})
				.finally(() => this.loading = false)
	},
	methods:{
		sendOrder(neatluxproduct){
			
				let userPhoneNumber = {
					phone: this.phone_no
				}
				
				axios
				.post('https://neatlux.co.tz/server/api/order/1', userPhoneNumber )
				.then((response) =>{
					this.orderStatus = response.data
					console.log(this.orderStatus.order.number);
					
				})
				.catch(function(error){
					
				})
				.finally(() => this.loading = false)
		}
	}
});