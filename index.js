class Keranjang {
	constructor(produk, qty, harga) {
		this.produk = produk;
		this.qty = qty;
		this.harga = harga;
	}
}
let belanja = [
	{ produk: "Kemeja Pria", stock: 10, harga: 120000 },
	{ produk: "Celana Jeans Pria", stock: 5, harga: 200000 },
];
let tampilanBelanja = "";

belanja.forEach((val, index) => {
	tampilanBelanja +=
		index +
		1 +
		". " +
		val.produk +
		" Stock " +
		val.stock +
		" Rp.@" +
		val.harga.toLocaleString("id-ID") +
		"\n";
});

let keranjang = [];
let menu = 0;
while (menu != 3) {
	menu = prompt(`
1. menu
2. keranjang
3. exit`);

	if (menu == "1") {
		let opt = parseInt(prompt(tampilanBelanja));
		if (opt > 0 && opt < 9) {
			let item = belanja[opt - 1];
			let qty = parseInt(prompt("qty brp?"));
			console.log(item);
			qty > item.stock || qty < 0
				? alert("input ngaco")
				: keranjang.push(new Keranjang(item.produk, qty, item.harga));
		}
	} else if (menu == 2) {
		console.log(keranjang);
	} else if (menu == 3) {
		alert("terima kasih sudah berkunjung");
	} else {
		alert("menu belum dibuat");
	}
}
console.log(alert);
