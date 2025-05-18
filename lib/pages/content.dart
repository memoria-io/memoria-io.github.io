import 'package:flutter/material.dart';

class Content extends StatelessWidget {
  final Widget child;

  const Content({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(40),
      child: child,
    );
  }
}