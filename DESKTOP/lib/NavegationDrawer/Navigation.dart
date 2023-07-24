import 'package:flutter/material.dart';
import 'package:eventdesk/Forms/Boleteria_page.dart';
import 'package:eventdesk/Consult/ConsultEvents.dart';
class Navigation extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Event Tickets',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Home'),
      ),
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: <Widget>[
            const DrawerHeader(
              decoration: BoxDecoration(
                color: Colors.blue,
              ),
              child: Text(
                'Events Tickets',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 24,
                ),
              ),
            ),
            ListTile(
              leading: const Icon(Icons.home),
              title: const Text('Home'),
              onTap: () {
                
                Navigator.pop(context); 
              },
            ),
            ListTile(
              leading: const Icon(Icons.format_bold),
              title: const Text('Boleteria'),
              onTap: () {
            
                Navigator.pop(context); 
                Navigator.push(context,
                    MaterialPageRoute(builder: (context) => BoleteriaForm()));
              },
            ),
              ListTile(
              leading: const Icon(Icons.list),
              title: const Text('Consulta Events'),
              onTap: () {
             
                Navigator.pop(context); 
                Navigator.push(context,
                    MaterialPageRoute(builder: (context) => ConsultaEvents()));
              },
            ),
          ],
        ),
      ),
      body: const Center(
        child:  Text('Tickets Sander',  style: TextStyle(fontSize: 36),),
      ),
    );
  }
}
