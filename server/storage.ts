import { 
  users, 
  products, 
  cartItems, 
  orders, 
  contactMessages,
  type User, 
  type InsertUser,
  type Product,
  type InsertProduct,
  type CartItem,
  type InsertCartItem,
  type Order,
  type InsertOrder,
  type ContactMessage,
  type InsertContactMessage
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  getCartItems(sessionId: string): Promise<CartItem[]>;
  addToCart(cartItem: InsertCartItem): Promise<CartItem>;
  updateCartItem(id: number, quantity: number): Promise<CartItem | undefined>;
  removeFromCart(id: number): Promise<boolean>;
  clearCart(sessionId: string): Promise<void>;
  
  createOrder(order: InsertOrder): Promise<Order>;
  getOrders(sessionId: string): Promise<Order[]>;
  
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private products: Map<number, Product>;
  private cartItems: Map<number, CartItem>;
  private orders: Map<number, Order>;
  private contactMessages: Map<number, ContactMessage>;
  private currentUserId: number;
  private currentProductId: number;
  private currentCartItemId: number;
  private currentOrderId: number;
  private currentContactMessageId: number;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.cartItems = new Map();
    this.orders = new Map();
    this.contactMessages = new Map();
    this.currentUserId = 1;
    this.currentProductId = 1;
    this.currentCartItemId = 1;
    this.currentOrderId = 1;
    this.currentContactMessageId = 1;
    
    // Initialize with SimpleSip Portable Matcha Maker
    this.initializeProducts();
  }

  private initializeProducts() {
    // SimpleSip Portable Matcha Maker
    const simpleSipProduct: Product = {
      id: this.currentProductId++,
      name: "SimpleSip Portable Matcha Maker",
      description: "Your all-in-one solution for delicious, perfectly blended matcha in seconds, wherever you are. No more whisking, no more bowls, no more endless clean-up!",
      price: 3000, // $30.00 in cents
      imageUrl: "/attached_assets/Gemini_Generated_Image_2e5fpd2e5fpd2e5f_1753122266714.png",
      inStock: 100,
    };
    this.products.set(simpleSipProduct.id, simpleSipProduct);

    // SimpleSip Flavor Powders
    const flavorPowders: Omit<Product, 'id'>[] = [
      {
        name: "SimpleSip Vanilla Matcha Powder",
        description: "Perfectly compatible with your SimpleSip Portable Matcha Maker. This smooth vanilla blend combines premium matcha with natural vanilla extract for a creamy, aromatic experience. Made with all-natural ingredients and no artificial flavors. Easy to mix and perfect for both hot and iced preparations. The subtle sweetness of vanilla perfectly complements the earthy matcha notes.",
        price: 700, // $7.00 in cents
        imageUrl: "/attached_assets/Gemini_Generated_Image_30ir0p30ir0p30ir_1753378078401.png",
        inStock: 50,
      },
      {
        name: "SimpleSip Strawberry Matcha Powder",
        description: "Designed specifically for your SimpleSip Portable Matcha Maker. This delightful strawberry matcha blend features real strawberry powder and premium matcha for a fruity, refreshing taste. All-natural ingredients with no artificial flavors or colors. Mixes effortlessly and tastes amazing both hot and cold. The sweet berry flavor creates a perfect balance with the rich matcha base.",
        price: 700, // $7.00 in cents
        imageUrl: "/attached_assets/Gemini_Generated_Image_30ir0p30ir0p30ir (1)_1753378065417.png",
        inStock: 50,
      },
      {
        name: "SimpleSip Chai Spice Matcha Powder",
        description: "Exclusively formulated for your SimpleSip Portable Matcha Maker. This exotic blend combines traditional chai spices (cinnamon, cardamom, ginger, cloves) with premium matcha powder. Made with organic spices and no artificial additives. Easy to prepare and delicious served hot or iced. The warming spices create a unique fusion that enhances the matcha's natural complexity.",
        price: 700, // $7.00 in cents
        imageUrl: "/attached_assets/Gemini_Generated_Image_30ir0p30ir0p30ir (2)_1753378060421.png",
        inStock: 50,
      },
      {
        name: "SimpleSip Blueberry Matcha Powder",
        description: "Optimized for your SimpleSip Portable Matcha Maker. This antioxidant-rich blend combines freeze-dried blueberry powder with premium matcha for a vibrant, healthful drink. All-natural ingredients with no artificial flavors or preservatives. Blends smoothly and tastes incredible hot or cold. The sweet-tart blueberry flavor pairs beautifully with the grassy notes of matcha.",
        price: 700, // $7.00 in cents
        imageUrl: "/attached_assets/Gemini_Generated_Image_30ir0p30ir0p30ir (3)_1753378057239.png",
        inStock: 50,
      },
      {
        name: "SimpleSip Banana Matcha Powder",
        description: "Specially crafted for your SimpleSip Portable Matcha Maker. This tropical blend features real banana powder and premium matcha for a creamy, naturally sweet flavor. Made with organic ingredients and no artificial additives. Mixes instantly and is perfect for both hot and iced beverages. The banana's natural sweetness and creaminess creates a smooth, satisfying matcha experience.",
        price: 700, // $7.00 in cents
        imageUrl: "/attached_assets/Gemini_Generated_Image_30ir0p30ir0p30ir (4)_1753378053462.png",
        inStock: 50,
      }
    ];

    // Add all flavor powders to storage
    flavorPowders.forEach(powder => {
      const product: Product = { ...powder, id: this.currentProductId++ };
      this.products.set(product.id, product);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const product: Product = { 
      ...insertProduct, 
      id,
      inStock: insertProduct.inStock ?? 100
    };
    this.products.set(id, product);
    return product;
  }

  async getCartItems(sessionId: string): Promise<CartItem[]> {
    return Array.from(this.cartItems.values()).filter(
      (item) => item.sessionId === sessionId,
    );
  }

  async addToCart(insertCartItem: InsertCartItem): Promise<CartItem> {
    // Check if item already exists in cart
    const existingItem = Array.from(this.cartItems.values()).find(
      (item) => 
        item.sessionId === insertCartItem.sessionId && 
        item.productId === insertCartItem.productId
    );

    if (existingItem) {
      // Update quantity instead of creating new item
      const updatedItem: CartItem = {
        ...existingItem,
        quantity: existingItem.quantity + (insertCartItem.quantity ?? 1),
      };
      this.cartItems.set(existingItem.id, updatedItem);
      return updatedItem;
    } else {
      const id = this.currentCartItemId++;
      const cartItem: CartItem = { 
        ...insertCartItem, 
        id, 
        quantity: insertCartItem.quantity ?? 1,
        createdAt: new Date() 
      };
      this.cartItems.set(id, cartItem);
      return cartItem;
    }
  }

  async updateCartItem(id: number, quantity: number): Promise<CartItem | undefined> {
    const item = this.cartItems.get(id);
    if (!item) return undefined;

    const updatedItem: CartItem = { ...item, quantity };
    this.cartItems.set(id, updatedItem);
    return updatedItem;
  }

  async removeFromCart(id: number): Promise<boolean> {
    return this.cartItems.delete(id);
  }

  async clearCart(sessionId: string): Promise<void> {
    const itemsToDelete = Array.from(this.cartItems.entries())
      .filter(([_, item]) => item.sessionId === sessionId)
      .map(([id]) => id);

    itemsToDelete.forEach(id => this.cartItems.delete(id));
  }

  async createOrder(insertOrder: InsertOrder): Promise<Order> {
    const id = this.currentOrderId++;
    const order: Order = { 
      ...insertOrder, 
      id, 
      status: insertOrder.status ?? "pending",
      createdAt: new Date() 
    };
    this.orders.set(id, order);
    return order;
  }

  async getOrders(sessionId: string): Promise<Order[]> {
    return Array.from(this.orders.values()).filter(
      (order) => order.sessionId === sessionId,
    );
  }

  async createContactMessage(insertContactMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentContactMessageId++;
    const message: ContactMessage = { 
      ...insertContactMessage, 
      id, 
      createdAt: new Date() 
    };
    this.contactMessages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();
