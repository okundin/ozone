import getData from "./getData"; // we can use a module from another module
import postData from "./postData";
import renderGoods from "./renderGoods";

const load = () => {
	getData().then((data) => {
		renderGoods(data);
	});
};

export default load;
