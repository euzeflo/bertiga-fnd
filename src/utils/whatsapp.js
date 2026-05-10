// src/utils/whatsapp.js

const WA_NUMBER = '628131290950' // Ganti dengan nomor WhatsApp bertiga.FnD

export function buildWhatsAppUrl(product) {
  const msg = product
    ? encodeURIComponent(
      `Halo bertiga.FnD 👋\n\nSaya ingin order produk berikut:\n\nNama Produk: ${product.name}\nHarga: ${product.price}\nJumlah: \nVarian: \nAlamat: \n\nApakah produk masih tersedia?`
    )
    : encodeURIComponent(
      `Halo bertiga.FnD 👋\n\nSaya ingin order produk berikut:\n\nNama Produk: \nJumlah: \nVarian: \nAlamat: \n\nApakah produk masih tersedia?`
    )
  return `https://wa.me/${WA_NUMBER}?text=${msg}`
}

export function buildShopeeUrl() {
  return 'https://shopee.co.id/bertiga.fnd' // Ganti dengan link Shopee asli
}
