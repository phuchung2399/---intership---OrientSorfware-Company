﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using OMS.Api.Core.DataAccess;

namespace OMS.API.Migrations
{
    [DbContext(typeof(OMSDbContext))]
    partial class OMSDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.11-servicing-32099")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("OMS.Api.Core.Entities.Category", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid?>("CreatedBy");

                    b.Property<DateTime?>("CreatedOn");

                    b.Property<Guid?>("DeletedBy");

                    b.Property<DateTime?>("DeletedOn");

                    b.Property<string>("Description")
                        .HasMaxLength(512);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<bool>("RecordActive");

                    b.Property<bool>("RecordDeleted");

                    b.Property<int>("RecordOrder");

                    b.Property<Guid?>("UpdatedBy");

                    b.Property<DateTime?>("UpdatedOn");

                    b.HasKey("Id");

                    b.ToTable("Category");
                });

            modelBuilder.Entity("OMS.Api.Core.Entities.Order", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime?>("CanceledDate");

                    b.Property<Guid?>("CreatedBy");

                    b.Property<DateTime?>("CreatedOn");

                    b.Property<Guid?>("DeletedBy");

                    b.Property<DateTime?>("DeletedOn");

                    b.Property<string>("DeliveryAddress");

                    b.Property<string>("Message");

                    b.Property<string>("Note");

                    b.Property<DateTime?>("ReceivedDate");

                    b.Property<bool>("RecordActive");

                    b.Property<bool>("RecordDeleted");

                    b.Property<int>("RecordOrder");

                    b.Property<DateTime?>("RefusedDate");

                    b.Property<int>("Status");

                    b.Property<Guid?>("UpdatedBy");

                    b.Property<DateTime?>("UpdatedOn");

                    b.Property<Guid>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Order");
                });

            modelBuilder.Entity("OMS.Api.Core.Entities.OrderDetail", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid?>("CreatedBy");

                    b.Property<DateTime?>("CreatedOn");

                    b.Property<Guid?>("DeletedBy");

                    b.Property<DateTime?>("DeletedOn");

                    b.Property<Guid>("OrderId");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,2)");

                    b.Property<Guid>("ProductSizeId");

                    b.Property<int>("Quantity");

                    b.Property<bool>("RecordActive");

                    b.Property<bool>("RecordDeleted");

                    b.Property<int>("RecordOrder");

                    b.Property<Guid?>("UpdatedBy");

                    b.Property<DateTime?>("UpdatedOn");

                    b.HasKey("Id");

                    b.HasIndex("OrderId");

                    b.HasIndex("ProductSizeId");

                    b.ToTable("OrderDetail");
                });

            modelBuilder.Entity("OMS.Api.Core.Entities.Product", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid>("CategoryId");

                    b.Property<Guid?>("CreatedBy");

                    b.Property<DateTime?>("CreatedOn");

                    b.Property<Guid?>("DeletedBy");

                    b.Property<DateTime?>("DeletedOn");

                    b.Property<string>("Image")
                        .IsRequired()
                        .HasMaxLength(512);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<bool>("RecordActive");

                    b.Property<bool>("RecordDeleted");

                    b.Property<int>("RecordOrder");

                    b.Property<Guid?>("UpdatedBy");

                    b.Property<DateTime?>("UpdatedOn");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.ToTable("Product");
                });

            modelBuilder.Entity("OMS.Api.Core.Entities.ProductSize", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid?>("CreatedBy");

                    b.Property<DateTime?>("CreatedOn");

                    b.Property<Guid?>("DeletedBy");

                    b.Property<DateTime?>("DeletedOn");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,2)");

                    b.Property<Guid>("ProductId");

                    b.Property<bool>("RecordActive");

                    b.Property<bool>("RecordDeleted");

                    b.Property<int>("RecordOrder");

                    b.Property<Guid>("SizeId");

                    b.Property<Guid?>("UpdatedBy");

                    b.Property<DateTime?>("UpdatedOn");

                    b.HasKey("Id");

                    b.HasIndex("ProductId");

                    b.HasIndex("SizeId");

                    b.ToTable("ProductSize");
                });

            modelBuilder.Entity("OMS.Api.Core.Entities.Role", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid?>("CreatedBy");

                    b.Property<DateTime?>("CreatedOn");

                    b.Property<Guid?>("DeletedBy");

                    b.Property<DateTime?>("DeletedOn");

                    b.Property<string>("Name");

                    b.Property<bool>("RecordActive");

                    b.Property<bool>("RecordDeleted");

                    b.Property<int>("RecordOrder");

                    b.Property<Guid?>("UpdatedBy");

                    b.Property<DateTime?>("UpdatedOn");

                    b.HasKey("Id");

                    b.ToTable("Role");
                });

            modelBuilder.Entity("OMS.Api.Core.Entities.Size", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid?>("CreatedBy");

                    b.Property<DateTime?>("CreatedOn");

                    b.Property<Guid?>("DeletedBy");

                    b.Property<DateTime?>("DeletedOn");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<bool>("RecordActive");

                    b.Property<bool>("RecordDeleted");

                    b.Property<int>("RecordOrder");

                    b.Property<Guid?>("UpdatedBy");

                    b.Property<DateTime?>("UpdatedOn");

                    b.HasKey("Id");

                    b.ToTable("Size");
                });

            modelBuilder.Entity("OMS.Api.Core.Entities.User", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Address")
                        .HasMaxLength(1024);

                    b.Property<Guid?>("CreatedBy");

                    b.Property<DateTime?>("CreatedOn");

                    b.Property<DateTime?>("DateOfBirth")
                        .HasMaxLength(50);

                    b.Property<Guid?>("DeletedBy");

                    b.Property<DateTime?>("DeletedOn");

                    b.Property<string>("Email")
                        .HasMaxLength(255);

                    b.Property<string>("Facebook")
                        .HasMaxLength(512);

                    b.Property<int>("Gender");

                    b.Property<string>("LinkedIn")
                        .HasMaxLength(512);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(512);

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(512);

                    b.Property<string>("PasswordSalt")
                        .IsRequired()
                        .HasMaxLength(512);

                    b.Property<string>("PhoneNumber")
                        .HasMaxLength(11);

                    b.Property<bool>("RecordActive");

                    b.Property<bool>("RecordDeleted");

                    b.Property<int>("RecordOrder");

                    b.Property<string>("ResetPasswordCode");

                    b.Property<DateTime?>("ResetPasswordExpiryDate");

                    b.Property<string>("Twitter")
                        .HasMaxLength(512);

                    b.Property<Guid?>("UpdatedBy");

                    b.Property<DateTime?>("UpdatedOn");

                    b.HasKey("Id");

                    b.ToTable("User");
                });

            modelBuilder.Entity("OMS.Api.Core.Entities.UserInRole", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid?>("CreatedBy");

                    b.Property<DateTime?>("CreatedOn");

                    b.Property<Guid?>("DeletedBy");

                    b.Property<DateTime?>("DeletedOn");

                    b.Property<bool>("RecordActive");

                    b.Property<bool>("RecordDeleted");

                    b.Property<int>("RecordOrder");

                    b.Property<Guid>("RoleId");

                    b.Property<Guid?>("UpdatedBy");

                    b.Property<DateTime?>("UpdatedOn");

                    b.Property<Guid>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.HasIndex("UserId");

                    b.ToTable("UserInRole");
                });

            modelBuilder.Entity("OMS.Api.Core.Entities.Order", b =>
                {
                    b.HasOne("OMS.Api.Core.Entities.User", "User")
                        .WithMany("Orders")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("OMS.Api.Core.Entities.OrderDetail", b =>
                {
                    b.HasOne("OMS.Api.Core.Entities.Order", "Order")
                        .WithMany("OrderDetails")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("OMS.Api.Core.Entities.ProductSize", "ProductSize")
                        .WithMany()
                        .HasForeignKey("ProductSizeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("OMS.Api.Core.Entities.Product", b =>
                {
                    b.HasOne("OMS.Api.Core.Entities.Category", "Category")
                        .WithMany("Products")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("OMS.Api.Core.Entities.ProductSize", b =>
                {
                    b.HasOne("OMS.Api.Core.Entities.Product", "Product")
                        .WithMany("ProductSizes")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("OMS.Api.Core.Entities.Size", "Size")
                        .WithMany("ProductSizes")
                        .HasForeignKey("SizeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("OMS.Api.Core.Entities.UserInRole", b =>
                {
                    b.HasOne("OMS.Api.Core.Entities.Role", "Role")
                        .WithMany("UserInRoles")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("OMS.Api.Core.Entities.User", "User")
                        .WithMany("UserInRoles")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
