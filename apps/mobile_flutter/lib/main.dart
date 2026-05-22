import 'package:flutter/material.dart';

void main() {
  runApp(const BodrApp());
}

class BodrApp extends StatelessWidget {
  const BodrApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Bodr Digital Fan Pass',
      theme: ThemeData(colorSchemeSeed: Colors.indigo, useMaterial3: true),
      home: const BodrHomePage(),
    );
  }
}

class BodrHomePage extends StatelessWidget {
  const BodrHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Bodr Digital Fan Pass')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: const [
          ListTile(
            title: Text('Host Security Flow'),
            subtitle: Text('Pre-vetted digital entry with biometric token checks.'),
          ),
          ListTile(
            title: Text('Verified Lodging'),
            subtitle: Text('Tournament-linked lodging with anti-cancellation safeguards.'),
          ),
          ListTile(
            title: Text('Geo-Perks'),
            subtitle: Text('Certified local merchant notifications near fan zones.'),
          ),
        ],
      ),
    );
  }
}
