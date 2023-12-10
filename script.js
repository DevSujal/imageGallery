  let images = ""
  for (let i = 0; i < 100; i++) {
    images += `<div class = "eachimage" style = "background :#${(
      Math.random() *
      0xfffff *
      1000000
    )
      .toString(16)
      .slice(
        0,
        6
      )}"><a href = https://picsum.photos/250/250?random=${i} target = _blank><img src=https://picsum.photos/250/250?random=${i}></a></img></div>`;
  }
  document.querySelector("#images").innerHTML = images;

  document.querySelector("#button").addEventListener("click", () => {
    window.location.reload(true)
  })

