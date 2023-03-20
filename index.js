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
1. Menu
2. Keranjang
3. Exit
`);

	if (menu == "1") {
		let opt = parseInt(prompt(tampilanBelanja));
		if (opt > 0 && opt < 9) {
			let item = belanja[opt - 1];
			let qty = parseInt(prompt("qty brp?"));
			console.log(item);
			qty > item.stock || qty < 0
				? alert("Input salah")
				: keranjang.push(new Keranjang(item.produk, qty, item.harga));
		}
	} else if (menu == 2) {
		let tempKeranjang = "";
		for (i = 0; i < keranjang.length; i++) {
			tempKeranjang += `\n ${i + 1}.   Produk : ${
				keranjang[i].produk
			},    Qty : ${keranjang[i].qty}   Harga : ${keranjang[i].harga} 

          Ketik "CO" untuk Check out
          Ketik angka 1 untuk Edit Qty or Delete Item`;
		}
		console.log(tempKeranjang);
		let opt2 = prompt(tempKeranjang);

		if (opt2 == "CO") {
			let totalHarga = 0;
			for (h = 0; h < keranjang.length; h++) {
				totalHarga += keranjang[h].harga * keranjang[h].qty;
			}

			let tampilTotal = prompt(
				`Total Harga yang Harus Dibayar Adalah : ${totalHarga}`
			);
			let sisabayar = tampilTotal - totalHarga;
			if (tampilTotal >= totalHarga) {
				prompt(`Pembayaran Selesai, Kembalian Uang Anda = ${sisabayar}`);
			} else {
				prompt("Nominal harga yang Anda Inputkan salah bung..!!");
			}
		} else if (opt2 > 0 || opt2 < keranjang.length) {
			let tempED = opt2;
			let opt2a = prompt(`${tempED}

            1. Edit Qty
            2. Delete Item

            `);

			if (opt2a == 1) {
				let opt2b = prompt("Masukkan qty baru...");
				keranjang[opt2a - 1].qty = opt2b;
			} else if (opt2a == 2) {
				let opt2c = prompt(`Apakah anda yakin ???
                1. YES
                2. NO`);

				if (opt2c == 1) {
					opt2a == prompt("Tidak ada barang dikeranjang");
				}
			} else {
				prompt(`Pilihan tidak valid...!!`);
			}
		}
	} else if (menu == 3) {
		alert("terima kasih sudah berkunjung");
	} else {
		alert("menu belum dibuat");
	}
}
