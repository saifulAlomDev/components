export function generateStars(input) {
  const maxStars = 5;

  if (input > maxStars) {
    return `<i class="fa-regular fa-star"></i>`.repeat(maxStars);
  } else {
    const fullStars = Math.floor(input);
    const halfStars = input % 1 >= 0.5 ? 1 : 0;
    const emptyStars = maxStars - fullStars - halfStars;

    return (
      `<i class="fa-solid fa-star"></i>`.repeat(fullStars) +
      `<i class="fa-solid fa-star-half-stroke"></i>`.repeat(halfStars) +
      `<i class="fa-regular fa-star"></i>`.repeat(emptyStars)
    );
  }
}

export function getUserRating(nodeList) {
    let rating = 0;
    nodeList = Array.from(nodeList);
  
    function removeClassed() {
      nodeList.forEach(star => star.classList.remove("fa-solid"));
    }
  
    nodeList.forEach((star, index) => {
      star.addEventListener("click", () => {
        removeClassed();
        nodeList.slice(0, index + 1).forEach(star => star.classList.add("fa-solid"));
        rating = index + 1;
      });
    });
  }
  


