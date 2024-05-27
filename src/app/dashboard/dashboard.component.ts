import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
    const sidebarOpen = document.getElementById("sidebarOpen");
    const sidebarClose = document.querySelector(".collapse_sidebar");
    const sidebarExpand = document.querySelector(".expand_sidebar");
    const sidebar = document.querySelector(".sidebar");
    const mainContent = document.querySelector(".main-content");
    const navbar = document.querySelector(".navbar");
    const submenuItems: any = document.querySelectorAll(".submenu_item");
  
    if (sidebarOpen) {
      sidebarOpen.addEventListener("click", () => {
        sidebar?.classList.toggle("close");
        mainContent?.classList.toggle("sidebar-closed");
        navbar?.classList.toggle("sidebar-closed");
        navbar?.classList.toggle("full-width");
      });
    }
  
    if (sidebarClose) {
      sidebarClose.addEventListener("click", () => {
        sidebar?.classList.add("close", "hoverable");
        mainContent?.classList.add("sidebar-closed");
        navbar?.classList.add("sidebar-closed");
        navbar?.classList.add("full-width");
      });
    }
  
    if (sidebarExpand) {
      sidebarExpand.addEventListener("click", () => {
        sidebar?.classList.remove("close", "hoverable");
        mainContent?.classList.remove("sidebar-closed");
        navbar?.classList.remove("sidebar-closed");
        navbar?.classList.remove("full-width");
      });
    }
  
    if (sidebar) {
      sidebar.addEventListener("mouseenter", () => {
        if (sidebar.classList.contains("hoverable")) {
          sidebar.classList.remove("close");
          mainContent?.classList.remove("sidebar-closed");
          navbar?.classList.remove("sidebar-closed");
          navbar?.classList.remove("full-width");
        }
      });
  
      sidebar.addEventListener("mouseleave", () => {
        if (sidebar.classList.contains("hoverable")) {
          sidebar.classList.add("close");
          mainContent?.classList.add("sidebar-closed");
          navbar?.classList.add("sidebar-closed");
          navbar?.classList.add("full-width");
        }
      });
    }
  
    if (submenuItems) {
      submenuItems.forEach((item: HTMLElement) => {
        item.addEventListener("click", () => {
          item.classList.toggle("show_submenu");
          submenuItems.forEach((item2: HTMLElement) => {
            if (item !== item2) {
              item2.classList.remove("show_submenu");
            }
          });
        });
      });
    }
  }
}
