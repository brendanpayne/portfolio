// Concatenates all the classes passed to it
export function classes(...classes) {
    return classes.filter(Boolean).join(' ');
  }