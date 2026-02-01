export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readingTime: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-scalable-microservices",
    title: "Building Scalable Microservices with Spring Boot",
    excerpt: "A deep dive into designing and implementing microservices architecture that can handle millions of requests.",
    content: `
# Building Scalable Microservices with Spring Boot

Microservices architecture has become the de facto standard for building large-scale, distributed systems. In this article, we'll explore the key principles and patterns that enable us to build truly scalable microservices using Spring Boot.

## The Foundation: Domain-Driven Design

Before writing any code, it's crucial to understand the domain you're working with. Domain-Driven Design (DDD) provides a framework for decomposing a complex system into bounded contexts, each representing a distinct business capability.

### Key Principles

1. **Single Responsibility**: Each microservice should do one thing and do it well
2. **Loose Coupling**: Services should be independent and communicate through well-defined APIs
3. **High Cohesion**: Related functionality should live together within the same service

## Service Communication

One of the most critical decisions in microservices architecture is how services communicate with each other.

### Synchronous Communication

REST APIs are the most common choice for synchronous communication:

\`\`\`java
@RestController
@RequestMapping("/api/orders")
public class OrderController {
    
    @Autowired
    private OrderService orderService;
    
    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody OrderRequest request) {
        Order order = orderService.createOrder(request);
        return ResponseEntity.ok(order);
    }
}
\`\`\`

### Asynchronous Communication

For decoupled, resilient systems, message queues like Kafka are invaluable:

\`\`\`java
@Service
public class OrderEventPublisher {
    
    @Autowired
    private KafkaTemplate<String, OrderEvent> kafkaTemplate;
    
    public void publishOrderCreated(Order order) {
        OrderEvent event = new OrderEvent(order.getId(), EventType.CREATED);
        kafkaTemplate.send("order-events", event);
    }
}
\`\`\`

## Resilience Patterns

Building resilient microservices requires implementing several patterns:

### Circuit Breaker

The circuit breaker pattern prevents cascading failures:

\`\`\`java
@CircuitBreaker(name = "inventory", fallbackMethod = "getDefaultInventory")
public Inventory checkInventory(String productId) {
    return inventoryClient.getInventory(productId);
}

public Inventory getDefaultInventory(String productId, Exception e) {
    return new Inventory(productId, 0, InventoryStatus.UNKNOWN);
}
\`\`\`

## Conclusion

Building scalable microservices is both an art and a science. By following these patterns and principles, you can create systems that are resilient, maintainable, and capable of handling growth.
    `,
    date: "2024-12-15",
    readingTime: "8 min read",
    tags: ["Java", "Spring Boot", "Microservices", "Architecture"],
  },
  {
    slug: "mastering-system-design",
    title: "Mastering System Design: A Practical Guide",
    excerpt: "Essential patterns and principles for designing systems that scale from thousands to millions of users.",
    content: `
# Mastering System Design: A Practical Guide

System design is one of the most valuable skills a software engineer can develop. Whether you're building a startup MVP or architecting enterprise systems, understanding how to design systems that scale is essential.

## Understanding Load and Scale

Before diving into solutions, we need to understand what we're designing for:

- **DAU (Daily Active Users)**: How many users will interact with your system daily?
- **Peak Load**: What's the maximum concurrent load you need to handle?
- **Data Volume**: How much data will you store and process?

## The Building Blocks

### Load Balancers

Load balancers distribute incoming traffic across multiple servers:

- Round Robin
- Least Connections
- IP Hash
- Weighted Distribution

### Caching

Caching is crucial for performance:

\`\`\`
Application Cache (Redis/Memcached)
  └── Database Query Cache
       └── Database
\`\`\`

### Database Scaling

There are two primary approaches:

1. **Vertical Scaling**: Add more resources to a single server
2. **Horizontal Scaling**: Distribute data across multiple servers (sharding)

## Case Study: Designing a URL Shortener

Let's design a URL shortening service like bit.ly:

### Requirements

- Shorten long URLs
- Redirect users to original URLs
- Handle high read traffic
- Track analytics

### API Design

\`\`\`
POST /api/shorten
GET /{shortCode}
GET /api/stats/{shortCode}
\`\`\`

### Database Schema

\`\`\`sql
CREATE TABLE urls (
    id BIGINT PRIMARY KEY,
    short_code VARCHAR(8) UNIQUE,
    original_url TEXT,
    created_at TIMESTAMP,
    click_count BIGINT DEFAULT 0
);
\`\`\`

## Conclusion

System design is about making trade-offs. There's rarely a perfect solution—only the right solution for your specific constraints and requirements.
    `,
    date: "2024-11-28",
    readingTime: "10 min read",
    tags: ["System Design", "Architecture", "Scalability"],
  },
  {
    slug: "dsa-problem-solving-mindset",
    title: "The Art of Problem Solving: 700+ DSA Problems Later",
    excerpt: "Lessons learned from solving over 700 data structure and algorithm problems on competitive platforms.",
    content: `
# The Art of Problem Solving: 700+ DSA Problems Later

After solving over 700 problems on LeetCode and other platforms, I've learned that success in DSA isn't about memorizing solutions—it's about developing a problem-solving mindset.

## The Pattern Recognition Game

Most problems fall into recognizable patterns:

1. **Two Pointers**: Sorted arrays, finding pairs
2. **Sliding Window**: Subarray/substring problems
3. **Dynamic Programming**: Optimization, counting paths
4. **Graph Traversal**: BFS/DFS applications
5. **Binary Search**: Sorted data, optimization

## My Problem-Solving Framework

### Step 1: Understand the Problem

- Read the problem twice
- Identify inputs and outputs
- Note constraints
- Think of edge cases

### Step 2: Pattern Recognition

Ask yourself:
- Is the data sorted? → Consider binary search
- Need to find a pair/triplet? → Consider two pointers
- Optimization problem? → Consider DP or greedy
- Connected components? → Consider graph traversal

### Step 3: Work Through Examples

\`\`\`
Input: nums = [2, 7, 11, 15], target = 9
Expected: [0, 1] (because 2 + 7 = 9)

Approach: Use a hash map to store complements
- For each number, check if (target - num) exists in map
\`\`\`

## The Two Sum Evolution

The famous "Two Sum" problem teaches us a lot about optimization:

### Brute Force O(n²)
\`\`\`java
for (int i = 0; i < n; i++) {
    for (int j = i + 1; j < n; j++) {
        if (nums[i] + nums[j] == target) return new int[]{i, j};
    }
}
\`\`\`

### Optimized O(n)
\`\`\`java
Map<Integer, Integer> map = new HashMap<>();
for (int i = 0; i < n; i++) {
    int complement = target - nums[i];
    if (map.containsKey(complement)) {
        return new int[]{map.get(complement), i};
    }
    map.put(nums[i], i);
}
\`\`\`

## Consistency Over Intensity

The key to improvement is consistent practice:

- Solve 2-3 problems daily
- Review solutions even when you solve them
- Learn from others' approaches
- Practice explaining your solutions

## Conclusion

Problem-solving is a skill that improves with deliberate practice. The goal isn't to solve every problem perfectly on the first try—it's to build intuition and pattern recognition over time.
    `,
    date: "2024-10-20",
    readingTime: "7 min read",
    tags: ["DSA", "Algorithms", "Problem Solving", "LeetCode"],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
