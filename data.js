// ─── SUBJECT LABELS ────────────────────────────────────────
const subjectLabels = {
  ds:   'Data Structures',
  oop:  'OOP',
  os:   'Operating Systems',
  db:   'Databases',
  cn:   'Networks',
  algo: 'Algorithms',
};

// ─── NOTES DATA ────────────────────────────────────────────
const notes = [
  {
    id: 1, subject: 'ds', title: 'Linked Lists',
    summary: 'Linear structure of nodes linked by pointers. Types: Singly, Doubly, Circular.',
    body: 'A linked list stores elements in nodes. Each node has data and a pointer to the next node. Unlike arrays, linked lists do not require contiguous memory.',
    points: [
      'Singly Linked List — each node points to the next only.',
      'Doubly Linked List — each node points to both next and previous.',
      'Circular Linked List — last node points back to the head.',
      'Insertion/Deletion: O(1) at head, O(n) at arbitrary position.',
      'Access: O(n) — no random access like arrays.',
    ],
    code: `struct Node {\n  int data;\n  Node* next;\n};`,
    readTime: '5 min',
  },
  {
    id: 2, subject: 'ds', title: 'Stacks & Queues',
    summary: 'Stack = LIFO. Queue = FIFO. Both implementable via arrays or linked lists.',
    body: 'A stack follows Last In First Out (LIFO). A queue follows First In First Out (FIFO). Both are fundamental data structures used in algorithms and OS.',
    points: [
      'Stack operations: push(), pop(), peek() — all O(1).',
      'Queue operations: enqueue(), dequeue() — all O(1).',
      'Stack use cases: function call stack, undo/redo, expression evaluation.',
      'Queue use cases: CPU scheduling, BFS, print spooling.',
    ],
    code: `// Stack using array\nint stack[100], top = -1;\nvoid push(int x) { stack[++top] = x; }\nint pop() { return stack[top--]; }`,
    readTime: '4 min',
  },
  {
    id: 3, subject: 'ds', title: 'Binary Search Trees (BST)',
    summary: 'Tree where left < root < right. Supports O(log n) search on average.',
    body: 'In a BST, for every node, all values in the left subtree are smaller and all values in the right subtree are larger. Enables efficient search, insert, and delete.',
    points: [
      'Search: O(log n) average, O(n) worst case (unbalanced).',
      'Insert: O(log n) average.',
      'Inorder traversal of BST gives sorted output.',
      'Balanced BSTs (AVL, Red-Black) guarantee O(log n) always.',
    ],
    readTime: '6 min',
  },
  {
    id: 4, subject: 'ds', title: 'Graphs',
    summary: 'Collection of vertices and edges. Directed or undirected, weighted or unweighted.',
    body: 'A graph G = (V, E) consists of vertices V and edges E. Graphs model real-world networks like roads, social media, and the internet.',
    points: [
      'Directed Graph (Digraph) — edges have direction.',
      'Undirected Graph — edges are bidirectional.',
      'Adjacency Matrix — 2D array, O(V²) space.',
      'Adjacency List — array of lists, O(V+E) space.',
      'BFS uses a Queue; DFS uses a Stack (or recursion).',
    ],
    readTime: '7 min',
  },
  {
    id: 5, subject: 'oop', title: '4 Pillars of OOP',
    summary: 'Encapsulation, Abstraction, Inheritance, Polymorphism.',
    body: 'Object-Oriented Programming is based on four core principles that help write modular, reusable, and maintainable code.',
    points: [
      'Encapsulation — hiding internal data using access modifiers (private, public, protected).',
      'Abstraction — exposing only necessary details; hiding complexity.',
      'Inheritance — a class (child) inherits properties and methods from another (parent).',
      'Polymorphism — one interface, many implementations. Achieved via method overloading and overriding.',
    ],
    readTime: '5 min',
  },
  {
    id: 6, subject: 'oop', title: 'Classes & Objects',
    summary: 'Class is a blueprint; Object is an instance of that class.',
    body: 'A class defines attributes (data) and methods (functions). An object is a specific instance of a class with actual values.',
    points: [
      'Constructor — special method called when an object is created.',
      'Destructor — called when an object is destroyed.',
      'this keyword — refers to the current object.',
      'static members — shared across all instances of a class.',
    ],
    code: `class Student {\npublic:\n  string name;\n  int age;\n  Student(string n, int a) {\n    name = n; age = a;\n  }\n};`,
    readTime: '5 min',
  },
  {
    id: 7, subject: 'oop', title: 'Inheritance & Polymorphism',
    summary: 'Inheritance reuses code. Polymorphism allows one name, many behaviors.',
    body: 'Inheritance allows a derived class to use members of a base class. Polymorphism allows functions/methods to behave differently based on the object.',
    points: [
      'Single Inheritance — one parent.',
      'Multiple Inheritance — more than one parent (supported in C++).',
      'Method Overriding — redefining a parent method in child class.',
      'Method Overloading — same name, different parameters.',
      'Virtual functions enable runtime polymorphism.',
    ],
    readTime: '7 min',
  },
  {
    id: 8, subject: 'os', title: 'Process vs Thread',
    summary: 'Process = independent program. Thread = smallest unit inside a process.',
    body: 'A process is a running instance of a program with its own memory space. A thread is a lightweight unit of execution within a process; threads share memory.',
    points: [
      'Process has its own address space; threads share it.',
      'Context switching between processes is expensive; threads are cheaper.',
      'Multithreading improves performance on multi-core CPUs.',
      'Process states: New → Ready → Running → Waiting → Terminated.',
    ],
    readTime: '5 min',
  },
  {
    id: 9, subject: 'os', title: 'CPU Scheduling Algorithms',
    summary: 'FCFS, SJF, Round Robin, Priority. Goal: maximize CPU utilization.',
    body: 'CPU scheduling determines which process runs next. Different algorithms optimize for different goals like throughput, fairness, or response time.',
    points: [
      'FCFS (First Come First Served) — simple, no preemption, can cause convoy effect.',
      'SJF (Shortest Job First) — minimum average waiting time.',
      'Round Robin — each process gets a fixed time quantum. Fair.',
      'Priority Scheduling — higher priority runs first. Can cause starvation.',
      'Multilevel Queue — combines multiple algorithms for different process types.',
    ],
    readTime: '6 min',
  },
  {
    id: 10, subject: 'os', title: 'Deadlock',
    summary: 'Deadlock occurs when processes wait on each other indefinitely.',
    body: 'Deadlock is a situation where a set of processes are blocked, each waiting for a resource held by another process in the set.',
    points: [
      '4 Necessary Conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait.',
      'Prevention — eliminate one of the 4 conditions.',
      'Avoidance — Banker\'s Algorithm checks safe state before granting resources.',
      'Detection & Recovery — detect deadlock and kill/rollback a process.',
    ],
    readTime: '6 min',
  },
  {
    id: 11, subject: 'db', title: 'SQL Joins',
    summary: 'INNER, LEFT, RIGHT, FULL JOIN — combining rows from multiple tables.',
    body: 'SQL JOINs are used to retrieve data from two or more tables based on a related column. Understanding joins is essential for database queries.',
    points: [
      'INNER JOIN — returns only matching rows from both tables.',
      'LEFT JOIN — all rows from left table + matched from right.',
      'RIGHT JOIN — all rows from right table + matched from left.',
      'FULL OUTER JOIN — all rows from both tables.',
      'CROSS JOIN — Cartesian product of both tables.',
    ],
    code: `SELECT s.name, c.course\nFROM Students s\nINNER JOIN Courses c\nON s.id = c.student_id;`,
    readTime: '5 min',
  },
  {
    id: 12, subject: 'db', title: 'Normalization (1NF – 3NF)',
    summary: 'Organizing tables to reduce redundancy and improve integrity.',
    body: 'Normalization is the process of structuring a relational database to reduce data redundancy and dependency by organizing fields and tables.',
    points: [
      '1NF — each column contains atomic (indivisible) values; no repeating groups.',
      '2NF — in 1NF + no partial dependency (every non-key attribute depends on the whole primary key).',
      '3NF — in 2NF + no transitive dependency (non-key attributes don\'t depend on other non-key attributes).',
      'BCNF — stronger form of 3NF.',
    ],
    readTime: '7 min',
  },
  {
    id: 13, subject: 'cn', title: 'OSI Model',
    summary: '7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.',
    body: 'The OSI (Open Systems Interconnection) model is a conceptual framework that standardizes how different network protocols communicate across 7 layers.',
    points: [
      'Layer 7 — Application: HTTP, FTP, SMTP, DNS.',
      'Layer 6 — Presentation: Encryption, compression, translation.',
      'Layer 5 — Session: Establishes, manages, terminates sessions.',
      'Layer 4 — Transport: TCP, UDP — end-to-end communication.',
      'Layer 3 — Network: IP addressing, routing.',
      'Layer 2 — Data Link: MAC addresses, framing.',
      'Layer 1 — Physical: Cables, signals, bits.',
    ],
    readTime: '6 min',
  },
  {
    id: 14, subject: 'cn', title: 'TCP vs UDP',
    summary: 'TCP = reliable, connection-oriented. UDP = fast, connectionless.',
    body: 'TCP and UDP are transport layer protocols. TCP guarantees delivery and order; UDP is faster but does not guarantee delivery.',
    points: [
      'TCP — Three-way handshake (SYN, SYN-ACK, ACK).',
      'TCP — Used for: web browsing, email, file transfer.',
      'UDP — No connection setup, no error checking.',
      'UDP — Used for: video streaming, gaming, DNS queries.',
      'TCP is slower but reliable; UDP is faster but unreliable.',
    ],
    readTime: '5 min',
  },
  {
    id: 15, subject: 'algo', title: 'Sorting Algorithms',
    summary: 'Bubble, Selection, Insertion O(n²). Merge, Quick O(n log n).',
    body: 'Sorting algorithms arrange elements in a specific order. Choosing the right algorithm depends on input size and constraints.',
    points: [
      'Bubble Sort — repeatedly swap adjacent elements. O(n²). Simple.',
      'Selection Sort — find minimum and place it. O(n²).',
      'Insertion Sort — build sorted array one element at a time. O(n²), good for small input.',
      'Merge Sort — divide and merge. O(n log n). Stable.',
      'Quick Sort — pivot-based partition. O(n log n) avg, O(n²) worst.',
    ],
    readTime: '7 min',
  },
  {
    id: 16, subject: 'algo', title: 'Big-O Notation',
    summary: 'Describes algorithm efficiency. O(1) < O(log n) < O(n) < O(n²) < O(2ⁿ).',
    body: 'Big-O notation describes the upper bound of an algorithm\'s time or space complexity as input size grows. It helps compare algorithm efficiency.',
    points: [
      'O(1) — Constant time. Example: array access.',
      'O(log n) — Logarithmic. Example: binary search.',
      'O(n) — Linear. Example: linear search.',
      'O(n log n) — Example: merge sort.',
      'O(n²) — Quadratic. Example: bubble sort.',
      'O(2ⁿ) — Exponential. Example: brute-force subset problems.',
    ],
    readTime: '5 min',
  },
];

// ─── QUIZ QUESTIONS ─────────────────────────────────────────
const quizQuestions = [
  // Data Structures
  { subject: 'ds', question: 'Which data structure follows LIFO order?', options: ['Queue', 'Stack', 'Linked List', 'Tree'], answer: 1 },
  { subject: 'ds', question: 'What is the time complexity of searching in a balanced BST?', options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'], answer: 2 },
  { subject: 'ds', question: 'In a singly linked list, each node contains:', options: ['Only data', 'Data and two pointers', 'Data and one pointer', 'Only a pointer'], answer: 2 },
  { subject: 'ds', question: 'Which traversal of a BST gives sorted output?', options: ['Preorder', 'Postorder', 'Inorder', 'Level order'], answer: 2 },
  { subject: 'ds', question: 'BFS uses which data structure internally?', options: ['Stack', 'Queue', 'Heap', 'Tree'], answer: 1 },
  { subject: 'ds', question: 'What is the worst-case time complexity of Quick Sort?', options: ['O(n log n)', 'O(n²)', 'O(n)', 'O(log n)'], answer: 1 },

  // OOP
  { subject: 'oop', question: 'What does OOP stand for?', options: ['Object Oriented Programming', 'Open Output Protocol', 'Ordered Object Processing', 'Object Output Program'], answer: 0 },
  { subject: 'oop', question: 'Which pillar of OOP hides internal data?', options: ['Inheritance', 'Polymorphism', 'Abstraction', 'Encapsulation'], answer: 3 },
  { subject: 'oop', question: 'Method overriding is an example of:', options: ['Encapsulation', 'Compile-time polymorphism', 'Runtime polymorphism', 'Abstraction'], answer: 2 },
  { subject: 'oop', question: 'A constructor is called when:', options: ['A method is called', 'An object is created', 'A class is defined', 'A variable is declared'], answer: 1 },
  { subject: 'oop', question: 'Which keyword refers to the current object in a class?', options: ['self', 'current', 'this', 'object'], answer: 2 },

  // OS
  { subject: 'os', question: 'Which CPU scheduling algorithm can cause starvation?', options: ['Round Robin', 'FCFS', 'Priority Scheduling', 'SJF (non-preemptive)'], answer: 2 },
  { subject: 'os', question: 'What are the 4 necessary conditions for deadlock?', options: ['Mutex, Sync, Block, Wait', 'Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait', 'Preemption, Sync, Block, Mutex', 'None of the above'], answer: 1 },
  { subject: 'os', question: 'A thread differs from a process because:', options: ['Threads have their own memory space', 'Threads share memory with other threads', 'Threads cannot run concurrently', 'Threads are slower than processes'], answer: 1 },
  { subject: 'os', question: 'Round Robin scheduling uses a:', options: ['Priority queue', 'Fixed time quantum', 'Shortest job first policy', 'Random selection'], answer: 1 },

  // Databases
  { subject: 'db', question: 'What does SQL stand for?', options: ['Structured Query Language', 'Simple Query Logic', 'Stored Queue List', 'System Query Language'], answer: 0 },
  { subject: 'db', question: 'Which JOIN returns only matching rows from both tables?', options: ['LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'FULL JOIN'], answer: 2 },
  { subject: 'db', question: '1NF requires that all column values are:', options: ['Unique', 'Atomic', 'Indexed', 'Sorted'], answer: 1 },
  { subject: 'db', question: 'Which normal form eliminates transitive dependency?', options: ['1NF', '2NF', '3NF', 'BCNF'], answer: 2 },

  // Networks
  { subject: 'cn', question: 'How many layers does the OSI model have?', options: ['4', '5', '6', '7'], answer: 3 },
  { subject: 'cn', question: 'TCP is different from UDP because TCP is:', options: ['Faster', 'Connectionless', 'Reliable and connection-oriented', 'Used only for video streaming'], answer: 2 },
  { subject: 'cn', question: 'Which layer of OSI handles IP addressing?', options: ['Data Link', 'Transport', 'Network', 'Session'], answer: 2 },
  { subject: 'cn', question: 'DNS operates at which OSI layer?', options: ['Transport', 'Network', 'Application', 'Physical'], answer: 2 },

  // Algorithms
  { subject: 'algo', question: 'What is the time complexity of binary search?', options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'], answer: 2 },
  { subject: 'algo', question: 'Which sorting algorithm has O(n log n) worst case?', options: ['Bubble Sort', 'Selection Sort', 'Merge Sort', 'Insertion Sort'], answer: 2 },
  { subject: 'algo', question: 'O(1) complexity means:', options: ['Linear time', 'Constant time regardless of input', 'Quadratic time', 'Logarithmic time'], answer: 1 },
];
