function Post(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Gọi phương thức ${propertyName} với tham số:`, 'body', args);
    return originalMethod.apply(this, args);
  };
}

export class MyClass {
  @Post
  myMethod(body: Record<string, string>) {
    console.log(`Thực hiện myMethod với tham số: ${body}`);
  }
}
