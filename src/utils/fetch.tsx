export async function getData({url}:{url:string}) {
    const res = await fetch(url);
    return res.json();
  }