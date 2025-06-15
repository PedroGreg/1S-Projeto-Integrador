window.addEventListener("scroll", function () {
  let header = document.querySelector('header')
  header.classList.toggle('rolar', window.scrollY > 0)
})

// window.addEventListener("scroll", function () {
//   let toright = document.querySelectorAll('.tratamentos-photos')
//   toright.forEach(function (img) {
//     if (window.scrollY > 200) {
//       img.classList.add('aparecer')
//       img.classList.remove('tratamentos-photos')
//     } else {
//       img.classList.remove('aparecer')
//       img.classList.add('tratamentos-photos')
//     }
//   })
// })