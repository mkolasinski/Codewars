const sharePrice = (i, ch) => ch.reduce((p, c) => p * (c + 100) / 100, i).toFixed(2);
