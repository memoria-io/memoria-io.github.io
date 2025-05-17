import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: MainPage(),
    );
  }
}

class MainPage extends StatefulWidget {
  const MainPage({super.key});

  @override
  State<MainPage> createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> {
  String currentPage = 'home';

  @override
  Widget build(BuildContext context) {
    final Color backgroundColor = const Color(0xFFF9F9F9); // off-white
    final Color textColor = Colors.black87;
    final Color buttonColor = Colors.white;
    final Color borderColor = Colors.black26;

    return Scaffold(
      backgroundColor: backgroundColor,
      appBar: AppBar(
        backgroundColor: buttonColor,
        elevation: 0,
        title: const Image(
          image: AssetImage('assets/memoria_transparent.png'),
          height: 100,
        ),
        actions: [
          TextButton(onPressed: () => setState(() => currentPage = 'home'), child: Text('Features', style: TextStyle(color: textColor))),
          TextButton(onPressed: () => setState(() => currentPage = 'pricing'), child: Text('Pricing', style: TextStyle(color: textColor))),
          TextButton(onPressed: () => setState(() => currentPage = 'login'), child: Text('Login', style: TextStyle(color: textColor))),
        ],
      ),
      body: SingleChildScrollView(child: getPage(textColor, borderColor)),
      bottomNavigationBar: BottomAppBar(
        color: buttonColor,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            TextButton(onPressed: () => setState(() => currentPage = 'about'), child: Text('About', style: TextStyle(color: textColor))),
            TextButton(onPressed: () => setState(() => currentPage = 'contact'), child: Text('Contact', style: TextStyle(color: textColor))),
          ],
        ),
      ),
    );
  }

  Widget getPage(Color textColor, Color borderColor) {
    switch (currentPage) {
      case 'about':
        return const Center(child: Padding(padding: EdgeInsets.all(40), child: Text('About Memoria IO')));
      case 'contact':
        return const Center(child: Padding(padding: EdgeInsets.all(40), child: Text('Contact Us at info@memoria.io')));
      default:
        return HomePage(textColor: textColor, borderColor: borderColor);
    }
  }
}

class HomePage extends StatelessWidget {
  final Color textColor;
  final Color borderColor;
  const HomePage({super.key, required this.textColor, required this.borderColor});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(32.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          const SizedBox(height: 40),
          Text(
            'Tailored Technology Solutions for Your Business',
            textAlign: TextAlign.center,
            style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold, color: textColor),
          ),
          const SizedBox(height: 10),
          Text(
            'Offering IT strategy, cloud services, and cybersecurity.',
            textAlign: TextAlign.center,
            style: TextStyle(color: textColor),
          ),
          const SizedBox(height: 20),
          OutlinedButton(
            onPressed: () {},
            style: OutlinedButton.styleFrom(
              backgroundColor: Colors.white,
              foregroundColor: textColor,
              side: BorderSide(color: borderColor),
            ),
            child: const Text('Get Started'),
          ),
          const SizedBox(height: 40),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: const [
              Icon(Icons.cloud, size: 48),
              Icon(Icons.security, size: 48),
              Icon(Icons.code, size: 48),
            ],
          ),
          const SizedBox(height: 10),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: const [
              Text('Cloud Solutions'),
              Text('Cybersecurity'),
              Text('Custom Software Development'),
            ],
          ),
          const SizedBox(height: 40),
          Divider(color: borderColor),
          const SizedBox(height: 20),
          Text(
            '“Smart, reliable technology solutions that drive business success.”',
            textAlign: TextAlign.center,
            style: TextStyle(fontStyle: FontStyle.italic, color: textColor),
          ),
          const SizedBox(height: 10),
          const Icon(Icons.account_circle, size: 32),
          const Text('User Name'),
          const SizedBox(height: 20),
          OutlinedButton(onPressed: () {}, child: const Text('Contact Memoria IO')),
        ],
      ),
    );
  }
}
