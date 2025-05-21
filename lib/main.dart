import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:memoriaio/pages/about_page.dart';
import 'package:memoriaio/pages/contact_page.dart';
import 'package:memoriaio/pages/footer.dart';
import 'package:memoriaio/pages/home_page.dart';
import 'package:memoriaio/widgets/markdown_page.dart';

void main() => runApp(const MyApp());

final GoRouter _router = GoRouter(
  routes: [
    GoRoute(
      path: '/',
      builder: (_, __) => const MainLayout(child: HomePage()),
    ),
    GoRoute(
      path: '/products',
      builder: (_, __) => const MainLayout(child: MarkdownPage("products")),
    ),
    GoRoute(
      path: '/about',
      builder: (_, __) => const MainLayout(child: AboutPage()),
    ),
    GoRoute(
      path: '/contact',
      builder: (_, __) => const MainLayout(child: ContactPage()),
    ),
  ],
);

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      routerConfig: _router,
      debugShowCheckedModeBanner: false,
    );
  }
}

class MainLayout extends StatelessWidget {
  final Widget child;

  const MainLayout({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        title: Container(
          padding: const EdgeInsets.symmetric(horizontal: 20),
          child: const Image(
            image: AssetImage('assets/images/logo.png'),
            height: 100,
            width: 100,
          ),
        ),
        actions: [
          TextButton(
            onPressed: () => context.go('/'),
            child: const Text('Home', style: TextStyle(color: Colors.black)),
          ),
          TextButton(
            onPressed: () => context.go('/products'),
            child: const Text('Products', style: TextStyle(color: Colors.black)),
          ),
          TextButton(
            onPressed: () => context.go('/about'),
            child: const Text('About', style: TextStyle(color: Colors.black)),
          ),
          TextButton(
            onPressed: () => context.go('/contact'),
            child: const Text('Contact', style: TextStyle(color: Colors.black)),
          ),
        ],
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Expanded(child: child),
          const Footer(),
        ],
      ),
    );
  }
}
