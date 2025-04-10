/*import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InventoryService } from 'src/app/services/inventory.service';
import { Inventory } from 'src/app/Models/inventroy.model';

@Component({
  selector: 'app-admin-inventory-manage',
  templateUrl: './admin-inventory-manage.component.html',
  styleUrls: ['./admin-inventory-manage.component.css']
})
export class AdminInventoryManageComponent implements OnInit {
  Inventories: Inventory[] = [];
  editInventoryForm: FormGroup;
  currentInventory: Inventory | null = null;
  showModal: boolean = false;
  formHeader: string = "Add Inventory";

  constructor(private inventoryService: InventoryService, private fb: FormBuilder) {
    this.editInventoryForm = this.fb.group({
      inventoryID: [null],
      quantity: [null],
      bookID: [null]
    });
  }

  ngOnInit(): void {
    this.inventoryService.getInventories().subscribe((data: Inventory[]) => {
      this.Inventories = data;
    });
  }

  openAddInventoryForm(): void {
    this.currentInventory = { inventoryID: 0, quantity: 0, bookID: 0 };
    this.editInventoryForm.reset();
    this.formHeader = "Add Inventory";
    this.showModal = true;
  }

  openEditModal(inventory: Inventory): void {
    this.currentInventory = inventory;
    this.editInventoryForm.patchValue(inventory);
    this.formHeader = "Edit Inventory";
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  onSubmit(): void {
    if (this.editInventoryForm.valid) {
      const formValue = this.editInventoryForm.value;
      if (this.formHeader === "Add Inventory") {
        this.inventoryService.addInventory(formValue).subscribe(
          (newInventory) => {
            alert("Inventory is added successfully");
            this.Inventories.push(newInventory);
            this.closeModal();
          },
          (error) => {
            console.error('Error adding inventory:', error);
          }
        );
      } else {
        this.inventoryService.editInventory(formValue).subscribe(
          (updatedInventory) => {
            alert("Inventory is updated successfully");
            this.Inventories = this.Inventories.map(inv => inv.inventoryID === updatedInventory.inventoryID ? updatedInventory : inv);
            this.closeModal();
          },
          (error) => {
            console.error('Error updating inventory:', error);
          }
        );
      }
    } else {
      alert("Please fill out all required fields.");
    }
  }

  deleteInventory(inventory: Inventory): void {
    const confirmation = confirm(`Are you sure you want to delete the inventory with ID: ${inventory.inventoryID}?`);
    if (confirmation) {
      this.inventoryService.deleteInventory(inventory.inventoryID).subscribe(
        () => {
          alert("Inventory is deleted successfully");
          this.Inventories = this.Inventories.filter(inv => inv.inventoryID !== inventory.inventoryID);
        },
        (error) => {
          console.error('Error deleting inventory:', error);
        }
      );
    }
  }
}*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InventoryService } from 'src/app/services/inventory.service';
import { Inventory } from 'src/app/Models/inventroy.model';

@Component({
  selector: 'app-admin-inventory-manage',
  templateUrl: './admin-inventory-manage.component.html',
  styleUrls: ['./admin-inventory-manage.component.css']
})
export class AdminInventoryManageComponent implements OnInit {
  Inventories: Inventory[] = [];
  editInventoryForm: FormGroup;
  currentInvnetory: Inventory | null = null;
  showModal: boolean = false;
  formHeader: string = "Add Inventory";

  constructor(private inventoryServices: InventoryService, private fb: FormBuilder) {
    this.editInventoryForm = this.fb.group({
       quantity: [null],
      bookID: [null],
     });
  }

  ngOnInit(): void {
    this.inventoryServices.getInventories().subscribe((data: Inventory[]) => {
      this.Inventories = data;
    });
  }

  openAddInventoryForm(): void {
    this.currentInvnetory = { inventoryID:0,  quantity: 0, bookID:0 };
    this.editInventoryForm.reset();
    this.formHeader = "Add Inventory";
    this.showModal = true;
  }

  openEditModal(Inventories: Inventory): void {
    this.currentInvnetory = Inventories;
    this.editInventoryForm.patchValue(Inventories);
    this.formHeader = "Edit Inventory";
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  onSubmit(): void {
    if (this.currentInvnetory) {
      const updatedInventory = { ...this.currentInvnetory, ...this.editInventoryForm.value };
      if (this.formHeader === "Add Inventory") {
        this.inventoryServices.addInventory(updatedInventory).subscribe((newInventory) => {
          alert("Inventory is added successfully");
          this.Inventories.push(newInventory);
          this.closeModal();
        });
      } else {
        this.inventoryServices.editInventory(updatedInventory).subscribe((updatedInventory) => {
          alert("Book is updated successfully");
          this.Inventories = this.Inventories.map(b => b.inventoryID === updatedInventory.inventoryID ? updatedInventory : b);
          this.closeModal();
        });
      }
    }
  }

  deleteInventory(inventory: Inventory): void {
    const confirmation = confirm(`Are you sure you want to delete the inventory: ${inventory.quantity}?`);
    if (confirmation) {
      this.inventoryServices.deleteInventory(inventory.inventoryID).subscribe(() => {
        alert("Inventory is deleted successfully");
        this.Inventories = this.Inventories.filter(b => b.inventoryID !== inventory.inventoryID);
      });
    }
  }
}

