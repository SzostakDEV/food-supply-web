export class Food {
  id: number;
  available: boolean;
  price: number;
  description: string;
  name: string;

  public static hydrate(data: any): Food {
    const food = new Food();

    food.id = data.id;
    food.available = data.available__c;
    food.name = data.name;
    food.price = data.price__c;
    food.description = data.description__c;

    return food;
  }
}
