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
	{ produk: "Sepatu Air Jordan High", stock: 3, harga: 2000000 },
	{ produk: "Yeezy Stock", stock: 5, harga: 4000000 },
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
				? alert("input tidak sesuai")
				: keranjang.push(new Keranjang(item.produk, qty, item.harga));
		}
	} else if (menu == 2) {
		let menu2 = 0;
		menu2 = prompt(`
1. checkout
2. delete
3. edit
4. back`);
		if (menu2 == "1") {
			let total = 0;
			for (let i = 0; i < keranjang.length; i++) {
				let totalHarga = keranjang[i].harga * keranjang[i].qty;
				total += totalHarga;
				prompt(
					i +
						" " +
						keranjang[i].produk +
						" Qty : " +
						keranjang[i].qty +
						" Rp. " +
						keranjang[i].harga +
						" Total harga : " +
						totalHarga
				);
			}
			prompt("Total harga: " + total);
		}
	} else if (menu == 3) {
		alert("terima kasih sudah berkunjung");
	} else {
		alert("menu belum dibuat");
	}
}
console.log(belanja);
