// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Approval extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("src", Value.fromString(""));
    this.set("guy", Value.fromString(""));
    this.set("wad", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Approval entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Approval must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Approval", id.toString(), this);
    }
  }

  static load(id: string): Approval | null {
    return changetype<Approval | null>(store.get("Approval", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get src(): string {
    let value = this.get("src");
    return value!.toString();
  }

  set src(value: string) {
    this.set("src", Value.fromString(value));
  }

  get guy(): string {
    let value = this.get("guy");
    return value!.toString();
  }

  set guy(value: string) {
    this.set("guy", Value.fromString(value));
  }

  get wad(): BigInt {
    let value = this.get("wad");
    return value!.toBigInt();
  }

  set wad(value: BigInt) {
    this.set("wad", Value.fromBigInt(value));
  }
}

export class LogNote extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("sig", Value.fromBytes(Bytes.empty()));
    this.set("usr", Value.fromString(""));
    this.set("arg1", Value.fromBytes(Bytes.empty()));
    this.set("args2", Value.fromBytes(Bytes.empty()));
    this.set("data", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save LogNote entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type LogNote must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("LogNote", id.toString(), this);
    }
  }

  static load(id: string): LogNote | null {
    return changetype<LogNote | null>(store.get("LogNote", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sig(): Bytes {
    let value = this.get("sig");
    return value!.toBytes();
  }

  set sig(value: Bytes) {
    this.set("sig", Value.fromBytes(value));
  }

  get usr(): string {
    let value = this.get("usr");
    return value!.toString();
  }

  set usr(value: string) {
    this.set("usr", Value.fromString(value));
  }

  get arg1(): Bytes {
    let value = this.get("arg1");
    return value!.toBytes();
  }

  set arg1(value: Bytes) {
    this.set("arg1", Value.fromBytes(value));
  }

  get args2(): Bytes {
    let value = this.get("args2");
    return value!.toBytes();
  }

  set args2(value: Bytes) {
    this.set("args2", Value.fromBytes(value));
  }

  get data(): Bytes {
    let value = this.get("data");
    return value!.toBytes();
  }

  set data(value: Bytes) {
    this.set("data", Value.fromBytes(value));
  }
}

export class Transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("src", Value.fromString(""));
    this.set("dst", Value.fromString(""));
    this.set("wad", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Transfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Transfer must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Transfer", id.toString(), this);
    }
  }

  static load(id: string): Transfer | null {
    return changetype<Transfer | null>(store.get("Transfer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get src(): string {
    let value = this.get("src");
    return value!.toString();
  }

  set src(value: string) {
    this.set("src", Value.fromString(value));
  }

  get dst(): string {
    let value = this.get("dst");
    return value!.toString();
  }

  set dst(value: string) {
    this.set("dst", Value.fromString(value));
  }

  get wad(): BigInt {
    let value = this.get("wad");
    return value!.toBigInt();
  }

  set wad(value: BigInt) {
    this.set("wad", Value.fromBigInt(value));
  }
}
