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


